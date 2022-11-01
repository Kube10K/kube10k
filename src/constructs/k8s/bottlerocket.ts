import { IMachineImage, MachineImage, UserData } from 'aws-cdk-lib/aws-ec2';
import { KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { Construct } from 'constructs';

var tomlify = require('tomlify-j0.4');

KubernetesVersion;
export enum BootstrapContainerMode {
  OFF = 'off',
  ONCE = 'once',
  ALWAYS = 'always'
}

export interface BootstrapContainer {
  readonly mode: BootstrapContainerMode;
  readonly source: string;
  readonly essential?: boolean;
}

export interface Kernel {
  readonly sysctl: Sysctl;
}

export interface Sysctl {
  readonly 'net.ipv4.ip_local_port_range'?: string;
  readonly 'fs.inotify.max_user_instances'?: string;
  readonly 'fs.inotify.max_user_watches'?: string;
}

export interface Kubernetes {
  /**
   *  Required parameters populated by the constructor of the BottleRocketSettings class.
   */
  readonly 'api-server': string;
  readonly 'cluster-name': string;
  readonly 'cluster-certificate': string;

  /**
   * Optional parameters
   */
  readonly 'cluster-dns-ip'?: string[];
  readonly 'image-gc-high-threshold-percent'?: string;
  readonly 'image-gc-low-threshold-percent'?: string;
  readonly 'event-qps'?: number;
  readonly 'kube-api-qps'?: number;
  readonly 'kube-api-burst'?: number;
  readonly 'node-taints': { [key: string]: string };
  readonly 'eviction-hard'?: EvictionHard;
}

export interface EvictionHard {
  readonly 'memory.available'?: string;
  readonly 'nodefs.available'?: string;
  readonly 'nodefs.inodesFree'?: string;
  readonly 'imagefs.available'?: string;
  readonly 'imagefs.inodesFree'?: string;
  readonly 'pid.available'?: string;
}

export class BottleRocketSettings {
  'bootstrap-containers'?: { [id: string]: BootstrapContainer };
  readonly kernel: Kernel;
  readonly kubernetes: Kubernetes;

  /**
   *
   * @param apiServer
   * Type: String
   *
   * @param clusterName
   * Type: String
   *
   * @param clusterCertificate
   * Type: String
   *
   * @param clusterDnsIp
   * Type: List of Strings
   *
   * If supplied, this list of strings is passed into the Kubelet and used to
   * configure Pods to point to particular DNS Server IPs. Typically this is
   * used to redirect Pod DNS requests to a node-local-dns cache.
   *
   * @param {string} imageGcHighThresholdPercent
   * Type: String, Default: '75'
   * We want to try to keep our nodes more empty than that for
   * container storage itself.
   *
   * https://aws.amazon.com/premiumsupport/knowledge-center/eks-worker-nodes-image-cache

   * @param imageGcLowThresholdPercent
   * Type: String, Default: '75'
   * We want to try to keep our nodes more empty than that for
   * container storage itself.

   * https://aws.amazon.com/premiumsupport/knowledge-center/eks-worker-nodes-image-cache
   *
   * When our nodes boot up, they have quite a bit to do initially... the
   * default limits are very very low and safe, but they slow down the
   * bootstrapping process and introduce room for race-conditions and failures
   * especially around IP address handling.
   *
   * https://github.com/projectcalico/calico/issues/3530#issuecomment-636094198
   * https://github.com/kubernetes/kubernetes/issues/39113
   * https://calicousers.slack.com/archives/CPEPF833L/p1622215571117800

   * @param eventQps
   * Default: 0
   *
   * @param kubeApiQps
   * Default: 30
   *
   * @param kubeApiBurst
   * Default: 60
   *
   */
  constructor(
    // "kubernetes" section settings
    apiServer: string,
    clusterName: string,
    clusterCertificate: string,
    clusterDnsIp?: string[],

    //Default: 85
    imageGcHighThresholdPercent: number = 75,

    // Default: 80
    imageGcLowThresholdPercent: number = 45,

    // Default: 5
    eventQps: number = 0,

    // Default: 5
    kubeApiQps: number = 30,

    // Default: 15
    kubeApiBurst: number = 60,

    // "kernel.sysctl" settings section
    NetIpv4LocalPortRangeStart: number = 12288,
    NetIpv4LocalPortRangeEnd: number = 65000,
    FsInotifyMaxUserInstances: number = 8192,
    FsInotifyMaxUserWatches: number = 1048676,

    // "kubernetes.eviction-hard" settings section
    MemoryAvailable: number = 5,
    NodeFSAvailable: number = 10,
    NodeFSInodesFree: number = 15,
    ImageFSInodesFree: number = 15,
    ImageFSAvailable: number = 30,
    PidAvailable: number = 30,

    // "kubernetes.bootstrap-containers" optional bootstrap containers
    BootstrapContainers: { [id: string]: BootstrapContainer } = {}
  ) {
    // TODO: Verify thresholdpercents between 0 and 100
    this['bootstrap-containers'] = BootstrapContainers;
    this.kernel = {
      sysctl: {
        'net.ipv4.ip_local_port_range': `${NetIpv4LocalPortRangeStart} ${NetIpv4LocalPortRangeEnd}`,
        'fs.inotify.max_user_instances': FsInotifyMaxUserInstances.toString(),
        'fs.inotify.max_user_watches': FsInotifyMaxUserWatches.toString()
      }
    };
    this.kubernetes = {
      'api-server': apiServer,
      'cluster-name': clusterName,
      'cluster-certificate': clusterCertificate,
      'cluster-dns-ip': clusterDnsIp,
      'image-gc-high-threshold-percent': imageGcHighThresholdPercent.toString(),
      'image-gc-low-threshold-percent': imageGcLowThresholdPercent.toString(),
      'event-qps': eventQps,
      'kube-api-qps': kubeApiQps,
      'kube-api-burst': kubeApiBurst,
      'node-taints': {},
      'eviction-hard': {
        'memory.available': this.percentage(MemoryAvailable),
        'nodefs.available': this.percentage(NodeFSAvailable),
        'nodefs.inodesFree': this.percentage(NodeFSInodesFree),
        'imagefs.available': this.percentage(ImageFSAvailable),
        'imagefs.inodesFree': this.percentage(ImageFSInodesFree),
        'pid.available': this.percentage(PidAvailable)
      }
    };
  }

  /**
   * Turns 30 into '30%' as a string for the BottlRocket configuration settings.
   *
   * @param value Number value to turn into a percentage string for BottleRocket
   * @returns string | undefined
   */
  percentage(value: number): string | undefined {
    if (0 <= value && value <= 100) {
      return `${value}%`;
    }
    return;
  }

  addTaint(key: string, value: string, effect: string = 'NoSchedule') {
    this.kubernetes['node-taints'][key] = `${value}:${effect}`;
  }

  /**
   * Generates a TOML-formatted BottleRocket configuration string
   *
   * @returns A TOML-formatted string
   */
  toToml(): string {
    return tomlify.toToml(
      { settings: this },
      {
        //@ts-ignore
        replace: function (key: string, value: any) {
          // If the value is a number, we need to convert it from a float to an
          // int... but JavaScript doesn't really have that concept. See
          // https://stackoverflow.com/questions/596467/how-do-i-convert-a-float-number-to-a-whole-number-in-javascript.
          //
          // Before: event-qps: 30.0
          // After: event-qps: 30

          if (typeof value === 'number') {
            return String(value | 0);
          }
          return false;
        }
      }
    );
  }

  /**
   * @returns A populated {@link UserData} object
   */
  getUserData(): UserData {
    return UserData.custom(this.toToml());
  }
}

/**
 * Quick function to return a populated {@link IMachineImage} interface for
 * finding the AMI for a BottleRocket image.
 *
 * @param kubernetesVersion The desired Kubernetes version for the AMI
 * @param architecture  The desired architecture for the AMI
 * @param version The desired BottleRocket version. Default is 'latest'.
 * @returns A populated {@link IMachineImage} resource
 */
export function getMachineImage(
  kubernetesVersion: string,
  architecture: string,
  version: string = 'latest'
): IMachineImage {
  return MachineImage.fromSsmParameter(
    `/aws/service/bottlerocket/aws-k8s-${kubernetesVersion}/${architecture.toLocaleLowerCase()}/${version}/image_id`
  );
}

/**
 * Quick function for returning the AMI Image ID of the BottleRocket image for a
 * particular Kubernetes Version and Architecture.
 *
 * @param scope A reference to any {@link Construct} where the lookup can take place
 * @param kubernetesVersion The desired Kubernetes version for the AMI
 * @param architecture  The desired architecture for the AMI
 * @param version The desired BottleRocket version. Default is 'latest'.
 * @returns A string represnting the AMI ID.
 */
export function getImageId(
  scope: Construct,
  kubernetesVersion: string,
  architecture: string,
  version: string = 'latest'
): string {
  return getMachineImage(kubernetesVersion, architecture, version).getImage(scope).imageId;
}
