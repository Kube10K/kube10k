import { Stack } from 'aws-cdk-lib';
import { HelmChart, ICluster } from 'aws-cdk-lib/aws-eks';
import { CfnRole, Effect, PolicyDocument, PolicyStatement, Role } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { HelmChartOverrides } from '../../common';
import { NodeTaint } from '../k8s/common';
import { OidcIrsa } from '../k8s/oidc-isra';

// The namespace where the pods and configuration will will live.
const TARGET_NAMESPACE: string = 'kube-system';

// Default values for the helm chart
const DEFAULT_HELM_RELEASE_NAME: string = 'cluster-autoscaler';
const DEFAULT_HELM_REPO: string = 'https://kube10k.github.io/helm-charts';
const DEFAULT_HELM_CHART: string = 'cluster-autoscaler';
const DEFAULT_HELM_CHART_VERSION: string = '0.0.2';

export interface ClusterAutoscalerProps {
  readonly cluster: ICluster;
  /**
   * We explicitly run the Tigera Operator on the System nodes
   */
  readonly nodeTaint: NodeTaint;

  /**
   * Required {@link OidcIrsa} resource used to create the IAM Role with the
   * appropriate {@link FederatedPolicy}.
   */
  readonly oidcIrsa: OidcIrsa;

  /**
   * If supplied, this allows for helm chart defaults to be overridden by the caller.
   */
  readonly helm?: HelmChartOverrides;
}

export class ClusterAutoscaler extends Construct {
  constructor(scope: Stack, id: string, props: ClusterAutoscalerProps) {
    super(scope, id);

    const serviceAccountName = props.helm?.releaseName || DEFAULT_HELM_RELEASE_NAME;

    /**
     * ref: https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/cloudprovider/aws/README.md#iam-policy
     */
    const policy = new PolicyDocument({
      statements: [
        // Read-Only actions that cannot be scoped down
        new PolicyStatement({
          effect: Effect.ALLOW,
          resources: ['*'],
          actions: [
            'autoscaling:DescribeAutoScalingGroups',
            'autoscaling:DescribeAutoScalingInstances',
            'autoscaling:DescribeLaunchConfigurations',
            'autoscaling:DescribeTags',
            'ec2:DescribeInstanceTypes',
            'ec2:DescribeLaunchTemplateVersions'
          ]
        }),

        // Actions that could be more narrowly scoped in the future.
        new PolicyStatement({
          effect: Effect.ALLOW,
          resources: ['*'],
          actions: [
            'autoscaling:SetDesiredCapacity',
            'autoscaling:TerminateInstanceInAutoScalingGroup',
            'ec2:DescribeImages',
            'ec2:GetInstanceTypesFromInstanceRequirements',
            'eks:DescribeNodegroup'
          ]
        })
      ]
    });
    const role = new Role(this, 'Role', {
      assumedBy: props.oidcIrsa.generateFederatedPolicy(this, TARGET_NAMESPACE, serviceAccountName),
      inlinePolicies: {
        AutoscalerPolicy: policy
      }
    });

    /**
     *
     */
    const chart = new HelmChart(this, 'Chart', {
      cluster: props.cluster,
      repository: props.helm?.repository || DEFAULT_HELM_REPO,
      chart: props.helm?.chart || DEFAULT_HELM_CHART,
      version: props.helm?.version || DEFAULT_HELM_CHART_VERSION,
      release: props.helm?.releaseName || DEFAULT_HELM_RELEASE_NAME,
      createNamespace: false,
      namespace: TARGET_NAMESPACE,

      // Waiting is potentially dangerous during certain upgrade/reconfiguration
      // events. The onus of verifying that these apps are working perfectly is
      // to the cluster operator.
      wait: false,

      values: {
        // User-supplied values
        ...props.helm?.values,

        // Pass in the ClusterName for auto-discovery of the Managed Nodegroups
        clusterName: props.cluster.clusterName,

        // Tolerate the system nodes taints
        tolerations: [props.nodeTaint.toleration()],

        /**
         * Don't require it, but prefer the System Nodes to run on. If the pods
         * scale up too much vertically to fit, then let them run wherever/
         * necessary
         */
        nodeAffinity: {
          preferredDuringSchedulingIgnoredDuringExecution: [
            {
              weight: 1,
              preference: {
                matchExpressions: [
                  {
                    key: props.nodeTaint.key,
                    operator: 'In',
                    values: [props.nodeTaint.value]
                  }
                ]
              }
            }
          ]
        },

        // Make sure the ServiceAccount has access to the IAM Role created above
        serviceAccount: {
          name: serviceAccountName,
          annotations: {
            'eks.amazonaws.com/role-arn': (role.node.defaultChild as CfnRole).getAtt('Arn')
          }
        }
      }
    });

    /**
     * Dependency ordering
     */
    chart.node.addDependency(role);
  }
}
