import * as path from "path";
import * as cdk from "aws-cdk-lib";
import { CfnMapping, RemovalPolicy } from "aws-cdk-lib";
import { SubnetType } from "aws-cdk-lib/aws-ec2";
import * as eks from "aws-cdk-lib/aws-eks";
import {
  AwsAuth,
  ClusterLoggingTypes,
  EndpointAccess,
  KubernetesManifest,
  KubernetesPatch,
} from "aws-cdk-lib/aws-eks";
import { IKey, Key } from "aws-cdk-lib/aws-kms";
import { Architecture, Code, LayerVersion } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import { stringify } from "yaml";
import { ClusterRoles } from "./roles";
import { ClusterSecurityGroups } from "./securitygroups";

export const DEFAULT_SERVICE_IPV4_CIDR: string = "172.20.0.0/16";
export const DEFAULT_KUBERNETES_VERSION: string = "1.23";
export const DEFAULT_PROXY_MODE: string = "ipvs";
export const DEFAULT_IPVS_SCHEDULER: string = "rr";

export interface OptionalKube10kClusterProps {
  // IpvsMode (optional) controls the default behavior of the Kube Proxy pods. In IPVS mode, the kernel is more
  // efficient at handling routing of packets to thousands of pods and services than in IPTables mode. The default
  // behavior is to enable IPVS mode.
  readonly proxyMode?: string;

  // IpvsScheduler (optional) controls which scheduler is used when operating in IPVS mode. See
  // https://github.com/bottlerocket-os/bottlerocket/blob/develop/packages/kubernetes-1.23/load-ipvs-modules.conf
  // for allowed schedulers in BottleRocket
  readonly ipvsScheduler?: string;

  // Tags (optional) will be applied to the EKS cluster that is created by the custom Lambda function
  readonly commonTags?: cdk.CfnTag[];

  /**
   * ServiceIPv4Cidr (optional, **immutable**) is the "Service IP range" that
   * will be used by the cluster when creating internal services. The default is
   * 172.20.0.0/16 and should be fine for most cases. This setting cannot be
   * changed once the initial stack has been created.
   */
  readonly serviceIPv4Cidr?: string;
}

export interface Kube10kClusterProps {
  /**
   * clusterName defines the name of the cluster in EKS - this is an immutable value once you set it.
   */
  readonly clusterName: string;

  /**
   * ClusterRoles (required, **immutable**) provides pre-defined IAM Roles for
   * the EKS Cluster Control Plane and the EC2 Node Role
   */
  readonly clusterRoles: ClusterRoles;

  /**
   * ClusterNetworkPrep (required, **immutable**) provides dedicated Security
   * Group IDs for the EKS Cluster Control Plane and EC2 Nodes
   */
  readonly clusterSecurityGroups: ClusterSecurityGroups;

  /**
   * KubernetesVersion (optional) supplies the desired version of the Kubernetes
   * cluster. This can be increased over time to perform cluster upgrades.
   */
  readonly kubernetesVersion: eks.KubernetesVersion;

  /**
   * Provides access to customize the Kube10kCluster more
   */
  readonly optionalKube10kClusterProps?: OptionalKube10kClusterProps;
}

export class Kube10kCluster extends Construct {
  /**
   * Provide access to the {@link Key} Key that is used by the cluster for storing
   * secrets. This Key can also be used later for in-cluster resources like the
   * KMS Secret Controller.
   */
  public readonly kmsKey: IKey;

  /**
   * Provides access to the underlying Cluster object.
   *
   * Note: We pass back the full Cluster object, not the ICluster interface. The
   * {@link Kube10kCluster} object provides access to the important
   * `clusterOpenIdConnectIssuerUrl` property.
   */
  public readonly cluster: eks.Cluster;

  /**
   * Provides access to the AwsAuth function for customizing the authentication
   * into the cluster.
   */
  public readonly awsAuth: AwsAuth;

  constructor(scope: cdk.Stack, id: string, props: Kube10kClusterProps) {
    super(scope, id);

    const proxyMode =
      props.optionalKube10kClusterProps?.proxyMode || DEFAULT_PROXY_MODE;
    const ipvsScheduler =
      props.optionalKube10kClusterProps?.ipvsScheduler ||
      DEFAULT_IPVS_SCHEDULER;

    /**
     * Create amapping configuraiton that can be used to pull versions/settings
     * for different versions of Kubernetes that this construct supports.
     */
    const versionTable: CfnMapping = new CfnMapping(this, "KubeProxyTag", {
      mapping: {
        1.23: {
          KubeProxyTag: "v1.23.7-minimal-eksbuild.1",
        },
        1.22: {
          KubeProxyTag: "1.22.11-minimal-eksbuild.2",
        },
        1.21: {
          KubeProxyTag: "1.21.14-minimal-eksbuild.2",
        },
      },
    });

    /**
     * Create a dedicated and unique KMS key that EKS will use internally for
     * encrypting the "Secret" resources in the ETCD database. This just ensures
     * that the secrets are not stored in plain text anywhere within the AWS
     * infrastructure.
     *
     * Optionally this KMS key may be used later for addons like the KmsSecrets controller
     */
    this.kmsKey = new Key(this, "ClusterSecretEncryptionKey", {
      alias: props.clusterName,
      description: scope.stackName,
      enabled: true,
      enableKeyRotation: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    /**
     * https://github.com/aws/aws-cdk/issues/19843
     * https://github.com/aws/aws-cdk/issues/20263
     *
     * Updated Kubectl Lambda Layer with support for Kubernetes 1.22+. The
     * default AWS-CDK-Go layer does not support newer Kubernetes versions.
     *
     * Relative path imports work within your own module, but when you are using the code from outside the module (eg,
     * integration tests or a client app) they don't work). Instead, we use __dirname to walk up the tree from this file
     * location.
     *
     */
    const assetPath = path.resolve(
      __dirname,
      "..",
      "..",
      "assets",
      "kubectl-layer"
    );
    const codeDirectory = Code.fromAsset(assetPath);
    const kubectlLayer: LayerVersion = new LayerVersion(this, "KubectlLayer", {
      removalPolicy: RemovalPolicy.DESTROY,
      layerVersionName: scope.stackName,
      code: Code.fromDockerBuild(codeDirectory.path, {
        file: "Dockerfile",
        platform: Architecture.X86_64.dockerPlatform,
        imagePath: "/opt",
      }),
      compatibleArchitectures: [Architecture.X86_64],
    });

    /**
     * Construct provided by the core AWS-CDK library for creating an EKS Cluster entirely within a single stack -
     * includes support for creating and managing Lambda layers/functions that will be used to handle the creation of
     * the cluster itself, ensuring that the execution of that lambda happens with the right cluster management rol, and
     * finally allowing that cluster management role to be used to then "manage" the internals of the cluster like the
     * "aws-auth" map.
     *
     * NOTE: This is absolutely not the same as the AWS::EKS::Cluster resource (also available as
     * awseks.NewCfnCluster()). That native CFN resource cannot be used in this stack because of the way AWS handles
     * authentication.
     *
     * Note: The "Default" name here is special in CDK, and we use it to remove
     * one layer of abstraction from the resource names created by the CDK.
     */
    const cluster = new eks.Cluster(this, "Default", {
      /**
       * Default top level settings
       */
      version: props.kubernetesVersion,
      clusterLogging: [
        ClusterLoggingTypes.API,
        ClusterLoggingTypes.AUDIT,
        ClusterLoggingTypes.AUTHENTICATOR,
        ClusterLoggingTypes.CONTROLLER_MANAGER,
        ClusterLoggingTypes.SCHEDULER,
      ],
      tags: getTagsAsMap(props.optionalKube10kClusterProps?.commonTags),
      outputClusterName: true,
      outputConfigCommand: false,
      outputMastersRoleArn: false,
      mastersRole: props.clusterRoles.masterRole,
      endpointAccess: EndpointAccess.PUBLIC_AND_PRIVATE,

      /**
       * Reference to our custom kubectl lambda layer above
       */
      kubectlLayer: kubectlLayer,

      /**
       * IMMUTABLE FIELDS
       */
      clusterName: props.clusterName,
      role: props.clusterRoles.clusterRole,
      secretsEncryptionKey: this.kmsKey,
      securityGroup: props.clusterSecurityGroups.controlPlaneSecurityGroup,
      vpc: props.clusterSecurityGroups.vpc,

      /**
       * This only refers to the subnets that the Kubernetes Control Plane will
       * be launched in. This does NOT have to do with the subnets that the EC2
       * Nodes or Pods live in.
       */
      vpcSubnets: [{ subnetType: SubnetType.PRIVATE_WITH_EGRESS }],

      /**
       * This setting controls the IP addresses that the Services in the cluster
       * use. Typically this is 172.0.0.0/16 and does not often conflict with
       * organizations existing IP ranges.
       */
      serviceIpv4Cidr:
        props.optionalKube10kClusterProps?.serviceIPv4Cidr ||
        DEFAULT_SERVICE_IPV4_CIDR,

      /**
       * Disable the creation of a default node group because it is EKS-AMI
       * based. We use the Bottlerocket-based nodes and will create our node
       * groups separately.
       */
      defaultCapacity: 0,
    });

    /**
     * Store access to the cluster and the awsAuth function directly for other callers
     */
    this.cluster = cluster;
    this.awsAuth = cluster.awsAuth;

    /**
     * Grant the NodeRole ac cess to bootstrap nodes. Without this nodes cannot
     * join the cluster.
     */
    this.awsAuth.addRoleMapping(props.clusterRoles.nodeRole, {
      username: "system:node:{{EC2PrivateDNSName}}",
      groups: ["system:bootstrappers", "system:nodes"],
    });

    /**
     * Explicitly control the kube-proxy configuration on our nodes. This
     * resource enables us to flip the cluster into IPVS mode which scales far
     * better than native IPTABLES mode, as well as to tune other kube-proxy
     * settings in the future.
     */
    const kubeProxyConfig = new KubernetesManifest(this, "KubeProxyConfigMap", {
      cluster: this.cluster,
      prune: false,
      skipValidation: false,
      overwrite: true,
      manifest: [getKubeProxyConfig(proxyMode, ipvsScheduler)],
    });
    kubeProxyConfig.node.addDependency(this.cluster);

    /**
     * The kube-proxy version is not updated automatically for you when you
     * update Kubernetes Versions in EKS. This patch ensures that we update the
     * version with the appropriate matching version based on the versionTable
     * that we created above.
     */
    const kubeProxyVersionPatch = new KubernetesPatch(
      this,
      "KubeProxyVersionPatch",
      {
        cluster: this.cluster,
        resourceName: "daemonset/kube-proxy",
        resourceNamespace: "kube-system",

        // During deletion, we don't unpatch.. just leave it alone.
        restorePatch: {},

        // Patch to apply at creation
        applyPatch: {
          spec: {
            template: {
              containers: [
                {
                  name: "kube-proxy",
                  image: cdk.Fn.join(":", [
                    cdk.Fn.sub(
                      "602401143452.dkr.ecr.${AWS::Region}.amazonaws.com/eks/kube-proxy"
                    ),
                    versionTable.findInMap(
                      props.kubernetesVersion.version,
                      "KubeProxyTag"
                    ),
                  ]),
                },
              ],
            },
          },
        },
      }
    );
    kubeProxyVersionPatch.node.addDependency(this.cluster);

    new KubernetesPatch(this, "KubeProxyModePatch", {
      cluster: this.cluster,
      resourceName: "daemonset/kube-proxy",
      resourceNamespace: "kube-system",

      // When deleting the patch, revert to the original config
      restorePatch: {
        spec: {
          template: {
            spec: {
              containers: [
                {
                  name: "kube-proxy",
                  command: [
                    "kube-proxy",
                    "--v=2",
                    "--config=/var/lib/kube-proxy-config/config",
                    "--hostname-override=$(NODE_NAME)",
                  ],
                },
              ],
            },
          },
        },
      },

      applyPatch: {
        spec: {
          template: {
            spec: {
              containers: [
                {
                  name: "kube-proxy",
                  command: [
                    "kube-proxy",
                    "--v=2",
                    "--config=/var/lib/kube-proxy-config/config",
                    "--hostname-override=$(NODE_NAME)",
                    "--proxy-mode=" + proxyMode,
                    "--ipvs-scheduler=" + ipvsScheduler,
                  ],
                },
              ],
            },
          },
        },
      },
    }).node.addDependency(kubeProxyConfig);
  }
}

/**
 *
 * Converts a list of CfnTag resources into a simple Key/Value map which is
 * required by the aws-eks.Cluster resource.
 *
 * @param tags List of cdk.CfnTag resources
 * @returns A key/value map
 */
export function getTagsAsMap(tags?: cdk.CfnTag[]): { [id: string]: string } {
  let tagMap: { [id: string]: string } = {};
  if (tags == null) {
    return {};
  }

  tags.forEach((tag) => {
    tagMap[tag.key] = tag.value;
  });

  return tagMap;
}

/**
 *
 * Returns a fully populated Kube Proxy ConfigMap
 *
 * @param proxyMode "ipvs" or "iptables"
 * @param scheduler Eg: "rr"
 * @returns
 */
export function getKubeProxyConfig(
  proxyMode: string = DEFAULT_PROXY_MODE,
  scheduler: string = DEFAULT_IPVS_SCHEDULER
): { [id: string]: any } {
  // The "config" blob in the ConfigMap needs to be a string, but we construct
  // it as a map for syntax verification.
  let configData = {
    apiVersion: "kubeproxy.config.k8s.io/v1alpha1",
    kind: "KubeProxyConfiguration",
    bindAddress: "0.0.0.0",
    clientConnection: {
      acceptContentTypes: "",
      burst: 10,
      contentType: "application/vnd.kubernetes.protobuf",
      kubeconfig: "/var/lib/kube-proxy/kubeconfig",
      qps: 5,
    },
    clusterCIDR: "",
    configSyncPeriod: "15m0s",
    enableProfiling: false,
    healthzBindAddress: "0.0.0.0:10256",
    hostnameOverride: "",
    iptables: {
      masqueradeAll: false,
      masqueradeBit: 14,
      minSyncPeriod: "0s",
      syncPeriod: "30s",
    },
    metricsBindAddress: "127.0.0.1:10249",
    nodePortAddresses: null,
    oomScoreAdj: -998,
    portRange: "",
    udpIdleTimeout: "250ms",

    // https://github.com/bottlerocket-os/bottlerocket/blob/edabbd99d450949732bf92eb0269575401617067/QUICKSTART-EKS.md#conntrack-configuration
    // https://github.com/bottlerocket-os/bottlerocket/blob/edabbd99d450949732bf92eb0269575401617067/packages/release/release-sysctl.conf#L34-L36
    conntrack: {
      // disabling these here, which will fall back to the bottlerocket OS default (1m)
      maxPerCore: 0, // default 32k
      min: 0, // default 128k
      tcpCloseWaitTimeout: "1h0m0s",
      tcpEstablishedTimeout: "24h0m0s",
    },

    // configure ipvs mode
    mode: proxyMode,
    ipvs: {
      excludeCIDRs: null,
      minSyncPeriod: "0s",
      scheduler: scheduler,
      syncPeriod: "30s",
    },
  };

  // Convert the map into a YAML string
  const configString = stringify(configData);

  // Now return the full configMap
  return {
    apiVersion: "v1",
    kind: "ConfigMap",
    metadata: {
      name: "kube-proxy-config",
      namespace: "kube-system",
      labels: {
        "eks.amazonaws.com/component": "kube-proxy",
        "k8s-app": "kube-proxy",
      },
    },
    data: {
      config: configString,
    },
  };
}
