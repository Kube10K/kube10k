import { Duration, Stack } from 'aws-cdk-lib';
import { HelmChart, KubernetesManifest, KubernetesPatch } from 'aws-cdk-lib/aws-eks';
import { CfnRole, ManagedPolicy, Role } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { OidcIrsa } from '../k8s/oidc-isra';
import { BaseAddonsProps, HelmChartOverrides } from './common';

// This is the name of the existing EKS resources (daemonset, service account,
// cluster role, etc) that is reserved by AWS and we cannot override with our
// Helm chart. Do not change this constant.
const EKS_RESERVED_RESOURCE_NAME: string = 'aws-node';

// This is the name of the pre-existing EKS-managed "Privileged" PSP
const EKS_PRIVILEGED_PSP_NAME: string = 'eks:podsecuritypolicy:privileged';

// The namespace where the `aws-node` pods and configuration will will live.
const TARGET_NAMESPACE: string = 'kube-system';

// Default values for the helm chart
const DEFAULT_HELM_RELEASE_NAME: string = 'aws-vpc-cni';
const DEFAULT_HELM_REPO: string = 'https://aws.github.io/eks-charts';
const DEFAULT_HELM_CHART: string = 'aws-vpc-cni';
const DEFAULT_HELM_CHART_VERSION: string = '1.1.21';

export interface AwsVpcCniProps extends BaseAddonsProps {
  /**
   * Required {@link OidcIrsa} resource used to create the IAM Role with the
   * appropriate {@link FederatedPolicy}.
   */
  oidcIrsa: OidcIrsa;

  /**
   * If supplied, this allows for helm chart defaults to be overridden by the caller.
   */
  helm?: HelmChartOverrides;
}

export class AwsVpcCni extends Construct {
  constructor(scope: Stack, id: string, props: AwsVpcCniProps) {
    super(scope, id);

    /**
     * Get our "release name" and verify its sanity.
     */
    const releaseName: string = props.helm?.releaseName || DEFAULT_HELM_RELEASE_NAME;

    /**
     * SANITY CHECK: Ensure that DEFAULT_HELM_RELEASE_NAME is not set to
     * 'aws-node'. This will conflict with the default resources that EKS
     * provides, and cause the helm chart to fail its installation.
     */
    if (releaseName == EKS_RESERVED_RESOURCE_NAME) {
      throw new Error(`You cannot set releaseName to "${EKS_RESERVED_RESOURCE_NAME}". Must choose another name.`);
    }

    /**
     * Create an IAM Role that has access to manage CNI interfaces and can be
     * assumed by the aws-node pods that we will create below.
     *
     * The AssumeRolePolicyDocument has a dynamically-generated key
     * (${OIDCurl}:sub) and CloudFormation has no way for us to do that natively
     * in YAML. Instead we have to generate the doc as JSON and pass it in that
     * way. Its more error prone, but it does work.
     */
    const role = new Role(this, 'Role', {
      assumedBy: props.oidcIrsa.generateFederatedPolicy(this, TARGET_NAMESPACE, releaseName)
    });

    // https://docs.aws.amazon.com/eks/latest/userguide/managing-vpc-cni.html
    role.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('AmazonEKS_CNI_Policy'));

    /**
     * We cannot install a new Helm chart that takes over existing AWS-Node
     * resources because the `aws-node` DaemonSet spec.selector field is
     * immutable, and the aws-vpc-cni-k8s chart uses a different value than the
     * default included by AWS at boot time on a new cluster.
     *
     * Additionally, it would be potentially dangerous to override the defaults
     * with a helm chart if we ever wanted to be able to revert the change.
     *
     * Instead, we simply disable the default aws-node daemonset by mutating its
     * `spec.template.spec.nodeSelector`, and then install the new chart with a
     * different `Values.nameOverride` value.
     */
    const disableDefaultDaemonset = new KubernetesPatch(this, 'Disable-Default-Aws-Node-Daemonset', {
      cluster: props.cluster,
      resourceName: 'daemonset/aws-node',
      resourceNamespace: TARGET_NAMESPACE,
      applyPatch: {
        spec: {
          template: {
            spec: {
              nodeSelector: {
                defaultAwsNodeIsDisabled: 'true'
              }
            }
          }
        }
      },
      restorePatch: {
        spec: {
          template: {
            spec: {
              nodeSelector: null
            }
          }
        }
      }
    });

    /**
     * Create a PodSecurityPolicy that grants the new aws-vpc-cni ServiceAccount
     * access to run privileged pods. The {@link PodSecurityPolicy} addon has
     * been executed at this point and will block the pods from coming up
     * otherwise.
     */
    const privilegedPsp = new KubernetesManifest(this, 'PrivilegedPspRoleBinding', {
      cluster: props.cluster,
      prune: true,
      overwrite: false,
      skipValidation: false,
      manifest: [
        {
          apiVersion: 'rbac.authorization.k8s.io/v1',
          kind: 'RoleBinding',
          metadata: {
            name: `${releaseName}-privileged-psp-access`,
            namespace: TARGET_NAMESPACE
          },
          roleRef: {
            apiGroup: 'rbac.authorization.k8s.io',
            kind: 'ClusterRole',
            name: EKS_PRIVILEGED_PSP_NAME
          },
          subjects: [
            {
              kind: 'ServiceAccount',
              name: releaseName
            }
          ]
        }
      ]
    });

    /**
     * ref: https://github.com/aws/eks-charts/tree/master/stable/aws-vpc-cni
     *
     * Create an implementation of the aws-vpc-cni-k8s chart for our standard
     * nodes. Customizations to the aws-vpc-cni-k8s chart can be applied through
     * the {@link HelmChartOverrides} resource.
     */
    const chart = new HelmChart(this, id, {
      cluster: props.cluster,
      repository: props.helm?.repository || DEFAULT_HELM_REPO,
      chart: props.helm?.chart || DEFAULT_HELM_CHART,
      version: props.helm?.version || DEFAULT_HELM_CHART_VERSION,
      release: props.helm?.releaseName || DEFAULT_HELM_RELEASE_NAME,
      createNamespace: false,
      namespace: TARGET_NAMESPACE,
      timeout: Duration.minutes(5),
      wait: true,
      values: {
        // Include values supplied by the user. Then override certain explicit
        // settings that we care about below.
        ...props.helm?.values,

        /**
         * Override the default value ("aws-node") so as to not conflict with
         * the original aws-node setup created by AWS during EKS cluster
         * creation. Note, the AWS supplied chart sets both `nameOverride` and
         * `fullnameOverride` in their default values.yaml file, so we override both here.
         */
        nameOverride: releaseName,
        fullnameOverride: releaseName,

        serviceAccount: {
          name: releaseName,
          annotations: {
            'eks.amazonaws.com/role-arn': (role.node.defaultChild as CfnRole).getAtt('Arn')
          }
        },

        /**
         * Set the Region in the helm chart to make sure the local region ECR
         * repo is being used.
         */
        init: {
          image: {
            region: scope.region
          }
        },
        image: {
          region: scope.region
        },
        eniConfig: {
          region: scope.region
        },

        /**
         * Configure the environment variables that manage the CNI configuration
         * in detail. See
         * https://github.com/aws/amazon-vpc-cni-k8s#cni-configuration-variables
         * for more details.
         */
        env: {
          // Specifies the cluster name to tag allocated ENIs with. See the "Cluster Name tag" section below.
          CLUSTER_NAME: props.cluster.clusterName,

          /**
           * Ref: https://github.com/aws/amazon-vpc-cni-k8s#aws_vpc_k8s_cni_custom_network_cfg
           *
           * Explicitly disable the "custom networking" mode AWS supports. The
           * problem with this model is that it is very hard to coordinate EC2
           * Node configurations with the associated `ENIConfig` when you use
           * third party compute management resources like Spot.io's Ocean
           * product, or even tools like AWS's Karpenter.sh.
           *
           * Always launch pods on the same Subnets as the underlying EC2 node.
           */
          AWS_VPC_K8S_CNI_CUSTOM_NETWORK_CFG: 'false',

          /**
           * https://github.com/aws/amazon-vpc-cni-k8s#enable_prefix_delegation-v190
           *
           * Rather than assigning individual IPs to each node, assign a `/28`
           * address to each ENI, and then issue Pod IPs out of those. This
           * speeds up Pod IP assignments and greatly increases pod density on
           * nodes.
           */
          ENABLE_PREFIX_DELEGATION: 'true',

          /**
           * Always maintain at least one ENI (and thus, /28) available on each
           * node as soon as they start up.
           */
          WARM_ENI_TARGET: 1,

          /**
           * https://github.com/aws/amazon-vpc-cni-k8s/blob/master/docs/eni-and-ip-target.md
           *
           * Always keep at least 2 IP addresses ready for pods for the fastest startup time.
           */
          WARM_IP_TARGET: 2,

          /**
           * This is a /28 - it's 14 IP addresses that we keep warm at any
           * moment. That's plenty and should fit even on a small node.
           */
          WARM_PREFIX_TARGET: '1',

          // Log to stdout so that `kubectl logs <pod>...` is useful for operators.
          AWS_VPC_K8S_CNI_LOG_FILE: 'stdout'
        },

        /**
         * Customize the resources required for the `aws-vpc-cni` (aws-node)
         * pods. Our experience shows these numbers work on even extremely large
         * nodes with 100+ pods.
         */
        resources: {
          limits: {
            memory: '256Mi'
          },
          requests: {
            cpu: '100m',
            memory: '128Mi'
          }
        },

        /**
         * Amazon installs the ENIConfig resource at creation time of the
         * cluster, trying to install it in this chart will fail and is
         * unnecessary.
         *
         * (also then removing the chart would try to remove the CRD, which would be bad)
         */
        crd: {
          create: false
        }
      }
    });

    /**
     * Don't install the new helm chart until we've disabled the origin aws-node
     * DaemonSet.
     */
    chart.node.addDependency(disableDefaultDaemonset);
    chart.node.addDependency(privilegedPsp);
    chart.node.addDependency(role);
  }
}
