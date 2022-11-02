import { Stack, Tags } from 'aws-cdk-lib';
import { EbsDeviceVolumeType, InstanceType, ISubnet, LaunchTemplate } from 'aws-cdk-lib/aws-ec2';
import { CapacityType, CfnNodegroup, ICluster, KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { Architecture } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { BottleRocketSettings, generateMachineImage } from './bottlerocket';
import { NodeLabels, NodeTaint } from './common';
import { ClusterRoles } from './roles';
import { ClusterSecurityGroups } from './securitygroups';

// There are certain changes to this construct that will apply to both the
// LaunchTemplate and the Nodegroup at the same time. When that happens, we have
// to force an entirely new Nodegroup to be created. This identifier helps
// trigger that behavior.
const RESOURCE_ID_STRING: string = 'v1';

const DEFAULT_ARCHITECTURE: Architecture = Architecture.X86_64;
const DEFAULT_BOTTLEROCKET_VERSION: string = 'latest';
const DEFAULT_CAPACITY_TYPE: CapacityType = CapacityType.ON_DEMAND;
const DEFAULT_DATA_VOLUME_SIZE: number = 100;
const DEFAULT_DESIRED_INSTANCE_COUNT: number = 1;
const DEFAULT_INSTANCE_TYPES: InstanceType[] = [
  new InstanceType('m5.large'),
  new InstanceType('m5a.large'),
  new InstanceType('m5n.large'),
  new InstanceType('m5zn.large'),
  new InstanceType('m5ad.large'),
  new InstanceType('m5ad.large'),
  new InstanceType('m6a.large'),
  new InstanceType('m6i.large'),
  new InstanceType('m6id.large'),
  new InstanceType('t3.large'),
  new InstanceType('t3a.large')
];
const DEFAULT_MAX_INSTANCE_COUNT: number = 100;
const DEFAULT_MIN_INSTANCE_COUNT: number = 1;
const DEFAULT_ROOT_VOLUME_SIZE: number = 5;

export interface OptionalManagedNodeGroupProps {
  /**
   * The arch of the bottlerocket image to run - X86_64 or ARM64
   */
  readonly architecture?: Architecture;

  /**
   * Pass in the BottleRocket version to use. Otherwise default of 'latest' is used.
   */
  readonly bottlerocketVersion?: string;

  /**
   * What kind of capacity are we using - Spot or OnDemand?
   */
  readonly capacityType?: CapacityType;

  /**
   * The size of the data volume that container images, containers, and
   * container logs will live on.
   *
   * @default: 100
   * @link DEFAULT_DATA_VOLUME_SIZE
   */
  readonly dataVolumeSize?: number;

  /**
   * The size of the root filesystem volume for Bottlerocket - this volume
   * will include system logs but not container logs.
   *
   * @default: 5
   */
  readonly rootVolumeSize?: number;

  /**
   * Minimum number of instances (per availability zone!) to run at all times.
   *
   * @default: 1
   */
  readonly minInstanceCount?: number;

  /**
   * Desired number of instances (per availability zone!) to run at initial
   * launch time. After that, the Cluster Autoscaler will take over managing
   * this value.
   *
   * @default: 1
   */
  readonly desiredInstanceCount?: number;

  /**
   * Maximum number of instances (per availability zone!) to ever run.
   *
   * @default: 100
   */
  readonly maxInstanceCount?: number;

  /**
   * Instance Types available for this AutoScaling Group. It critical that you
   * use instance types that have similar resources (same number of vCPUs,
   * Memory, etc). If you need multiple sizes and shapes of instances, use multiple
   * ManagedNodeGroup resources.
   */
  readonly instanceTypes?: InstanceType[];

  /**
   * Arbitrary set of Labels to apply to the nodes on startup. Amazon EKS will
   * apply these labels on their own as the node starts up, which can be useful
   * for helping to sort your workloads.
   *
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-labels
   */
  readonly nodeLabels?: NodeLabels;

  /**
   * Optional configuration for how to taint the nodes on startup to prevent
   * undesired workloads from running on them.
   */
  readonly nodeTaints?: NodeTaint;

  /**
   * Optional configuration of the IP address that kubelet will configure in the
   * /etc/resolv.conf for Pods. This is used to route DNS queries to a
   * node-local-dns cache for example.
   */
  readonly clusterDnsIp?: string[];

  /**
   * Allows customizing the BottleRocket User Data settings supplied on bootup.
   * Only use this if you want to tune options that are not exposed already in
   * the ManagedNodeGroupProps.
   */
  readonly bottleRocketSettings?: BottleRocketSettings;
}

export interface ManagedNodeGroupProps {
  /**
   * A {@link ICluster} resource that is used to populate the Cluster API
   * Server, Certificate, and more.
   */
  readonly cluster: ICluster;

  /**
   * A list of {@link Subnets} that we will launch {@link CfnNodeGroup}
   * resources on.
   */
  readonly subnets: ISubnet[];

  /**
   * A {@link ClusterSecurityGroups} resoruce that includes references to the
   * security group for the nodes.
   */
  readonly clusterNetwork: ClusterSecurityGroups;

  /**
   * A {@link ClusterRoles} resource that includes references to the NodeRole
   * IAM Role.
   */
  readonly clusterRoles: ClusterRoles;

  /**
   * Must pass in the desired kubernetes version to run on the compute nodes.
   * This should either match the cluster version, or be one version behind
   * the cluster version during upgrdes.
   */
  readonly kubernetesVersion: KubernetesVersion;

  /**
   * Optional user-configurable parameters
   */
  readonly optionalManagedNodeGroupProps?: OptionalManagedNodeGroupProps;
}

export class ManagedNodeGroup extends Construct {
  /**
   * Reference to the CFN Launch Template created here. Used internally and for testing.
   */
  public readonly launchTemplate: LaunchTemplate;

  /**
   * Reference to the NodeLabels applied to the nodes within this group
   */
  public readonly nodeLabels: NodeLabels;

  /**
   * Reference to the NodeTaint applied to the nodes within this group
   */
  public readonly nodeTaint?: NodeTaint;

  /**
   * Reference to the {@link BottleRocketSettings} used to configure these nodes
   */
  public readonly bottleRocketSettings: BottleRocketSettings;

  constructor(scope: Stack, id: string, props: ManagedNodeGroupProps) {
    super(scope, id);

    /**
     * If no nodeLabels are supplied, then start an empty list. We will be
     * adding some labels.
     */
    this.nodeLabels = props.optionalManagedNodeGroupProps?.nodeLabels || new NodeLabels();

    /**
     * Append some common node labels
     */
    this.nodeLabels.addInternalLabel('provisioner', 'cluster-autoscaler');
    this.nodeLabels.addInternalLabel('stack', scope.stackName);

    /**
     * Iterate over the supplied (or default) InstanceType objects and convert
     * them into a set of instance type strings that will be used in the
     * CfnNodeGroup resource.
     */
    let instanceTypeStrings: string[] = [];
    const instanceTypes = props.optionalManagedNodeGroupProps?.instanceTypes || DEFAULT_INSTANCE_TYPES;
    instanceTypes.forEach(function (element: InstanceType) {
      instanceTypeStrings.push(element.toString());
    });

    /**
     * Populate the UserData directly if it isn't supplied. The default is for
     * the user to not supply their own {@link BottleRocketSettings}. However,
     * we do provide the option for them if there is something they need to
     * override that we do not expose here.
     */
    this.bottleRocketSettings =
      props?.optionalManagedNodeGroupProps?.bottleRocketSettings ||
      new BottleRocketSettings(
        props.cluster.clusterEndpoint,
        props.cluster.clusterName,
        props.cluster.clusterCertificateAuthorityData,
        props.optionalManagedNodeGroupProps?.clusterDnsIp
      );

    /**
     * When tainting our nodes, we modify the userData to inform BottleRocket to
     * configure the taint.
     */
    if (props.optionalManagedNodeGroupProps?.nodeTaints) {
      // Store the taint object so other callers can reference it from the ManagedNodeGroup construct.
      this.nodeTaint = props.optionalManagedNodeGroupProps.nodeTaints;

      // Patch the userData so that the nodes taint themselves on startup
      this.bottleRocketSettings.addTaint(this.nodeTaint.key, this.nodeTaint.value, this.nodeTaint.effect);

      // Label the node with the taint/value - this is used for workloads to
      // self-select onto those specific nodes.
      //
      // NOTE: We do not use the internal function here - we label it exactly as
      // the user defined in the taint so that the taint and labels match
      // identically.
      this.nodeLabels.addLabel(this.nodeTaint.key, this.nodeTaint.value);
    }

    /**
     * Create the EC2 LaunchTemplate that the EKS Node Groups will use
     */
    this.launchTemplate = new LaunchTemplate(this, `LaunchTemplate-${RESOURCE_ID_STRING}`, {
      blockDevices: [
        {
          deviceName: '/dev/xvda',
          volume: {
            ebsDevice: {
              deleteOnTermination: true,
              volumeType: EbsDeviceVolumeType.GP3,
              volumeSize: props.optionalManagedNodeGroupProps?.rootVolumeSize || DEFAULT_ROOT_VOLUME_SIZE,
              encrypted: true
            }
          }
        },
        {
          deviceName: '/dev/xvdb',
          volume: {
            ebsDevice: {
              deleteOnTermination: true,
              volumeType: EbsDeviceVolumeType.GP3,
              volumeSize: props.optionalManagedNodeGroupProps?.rootVolumeSize || DEFAULT_DATA_VOLUME_SIZE,
              encrypted: true
            }
          }
        }
      ],
      detailedMonitoring: true,
      securityGroup: props.clusterNetwork.nodeSecurityGroup,
      machineImage: generateMachineImage(
        props.kubernetesVersion.version,
        props.optionalManagedNodeGroupProps?.architecture?.name || DEFAULT_ARCHITECTURE.name,
        props.optionalManagedNodeGroupProps?.bottlerocketVersion || DEFAULT_BOTTLEROCKET_VERSION
      ),
      requireImdsv2: true,
      spotOptions: undefined,
      userData: this.bottleRocketSettings.userData(),
      ebsOptimized: true
    });

    // The CNI-Metrics-Helper plugin uses this tag, oddly.
    Tags.of(this.launchTemplate).add('CLUSTER_ID', props.cluster.clusterName);

    // Inform the Cluster Autoscaler about our custom taints, if set.
    if (this.nodeTaint != undefined) {
      Tags.of(this.launchTemplate).add(
        `k8s.cluster-auto-scaler/node-template/taint/${this.nodeTaint.key}`,
        `${this.nodeTaint.value}:${this.nodeTaint.effect}`
      );
    }

    /**
     * For each subnet, create a dedicated NodeGroup. This ensures that the
     * Cluster Autoscaler is able to scale up demand in each zone independently
     * depending on the requirements.
     *
     * NOTE: Never Tag the nodeGroup resources themselves. This causes
     * problems whn both the launchTemplate and nodeGroups have their
     * configurations (tags included) updated within the same CFN update
     * operation.
     */
    props.subnets.forEach((subnet, i) => {
      new CfnNodegroup(this, `Group-${RESOURCE_ID_STRING}-${i}`, {
        clusterName: props.cluster.clusterName,
        nodeRole: props.clusterRoles.nodeRole.roleArn,
        amiType: 'CUSTOM',
        capacityType: props.optionalManagedNodeGroupProps?.capacityType || DEFAULT_CAPACITY_TYPE,
        instanceTypes: instanceTypeStrings,
        forceUpdateEnabled: true,
        subnets: [subnet.subnetId],
        labels: this.nodeLabels.labelsAsMap(),
        scalingConfig: {
          minSize: props.optionalManagedNodeGroupProps?.minInstanceCount || DEFAULT_MIN_INSTANCE_COUNT,
          maxSize: props.optionalManagedNodeGroupProps?.maxInstanceCount || DEFAULT_MAX_INSTANCE_COUNT,
          desiredSize: props.optionalManagedNodeGroupProps?.desiredInstanceCount || DEFAULT_DESIRED_INSTANCE_COUNT
        },
        launchTemplate: {
          id: this.launchTemplate.launchTemplateId,
          version: this.launchTemplate.latestVersionNumber
        }
      });
    }, this);
  }
}
