import { HelmChart, ICluster } from 'aws-cdk-lib/aws-eks';
import { Construct } from 'constructs';
import { HelmChartOverrides } from '../../common';

const DEFAULT_COREDNS_SERVICE_IP: string = '172.20.0.10';
const DEFAULT_NODE_LOCAL_DNS_SERVICE_IP: string = '169.254.20.10';
const DEFAULT_ENABLE_IPVS: boolean = true;

// Default values for the helm chart
const DEFAULT_HELM_RELEASE_NAME: string = 'node-local-dns';
const DEFAULT_HELM_REPO: string = 'https://kube10k.github.io/helm-charts';
const DEFAULT_HELM_CHART: string = 'node-local-dns';
const DEFAULT_HELM_CHART_VERSION: string = '0.0.3';

// The namespace for the node-local-dns pods must be the same as the core-dns
// pods. This defaults to kube-system on all EKS installations. This is because
// the pods need to read a shared configmap, and there is also hard-coded
// references in the node-local-dns pods to the name of the core-dns service.
const TARGET_NAMESPACE: string = 'kube-system';

export interface NodeLocalDnsProps {
  readonly cluster: ICluster;

  /**
   * Optionally override the default internal CoreDNS Service IP. This IP
   * address is generally set by AWS.
   */
  readonly coreDnsIp?: string;

  /**
   * Optionally override the new Service IP address that will be used for Pods
   * to point them to the Node-Local-DNS Pods. This setting should not be
   * changed once the cluster has been launched. The EC2 Nodes themselves will
   * be configured to point pods to this IP address, so this is a static setting
   * once your cluster is operational.
   */
  readonly serviceIp?: string;

  /**
   * Optionally use this to disable IPVS mode for the Node-Local-DNS pods.
   */
  readonly enableIpvs?: boolean;

  /**
   * If supplied, this allows for helm chart defaults to be overridden by the caller.
   */
  readonly helm?: HelmChartOverrides;
}

export class NodeLocalDns extends Construct {
  /**
   * Access to the DNS Service IP address that should be used by the Kubelet
   * process on the EC2 nodes to configure Pod DNS.
   */
  public readonly serviceIp: string;

  constructor(scope: Construct, id: string, props: NodeLocalDnsProps) {
    super(scope, id);

    this.serviceIp = props.coreDnsIp || DEFAULT_NODE_LOCAL_DNS_SERVICE_IP;

    const overrideValues = {
      serviceIP: this.serviceIp,
      coreDnsIP: props.coreDnsIp || DEFAULT_COREDNS_SERVICE_IP,
      ipvsMode: props.enableIpvs || DEFAULT_ENABLE_IPVS,
    };

    new HelmChart(this, id, {
      cluster: props.cluster,
      repository: props.helm?.repository || DEFAULT_HELM_REPO,
      chart: props.helm?.chart || DEFAULT_HELM_CHART,
      version: props.helm?.version || DEFAULT_HELM_CHART_VERSION,
      release: props.helm?.releaseName || DEFAULT_HELM_RELEASE_NAME,
      createNamespace: false,
      namespace: TARGET_NAMESPACE,
      values: { ...props.helm?.values, ...overrideValues },

      // Waiting is potentially dangerous during certain upgrade/reconfiguration
      // events. The onus of verifying that these apps are working perfectly is
      // to the cluster operator.
      wait: false,
    });
  }
}
