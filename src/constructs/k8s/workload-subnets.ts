import { Fn, Stack, Tags } from 'aws-cdk-lib';
import { CfnSubnet, CfnSubnetRouteTableAssociation, CfnVPCCidrBlock, ISubnet, IVpc, Subnet } from 'aws-cdk-lib/aws-ec2';
import { ICluster } from 'aws-cdk-lib/aws-eks';
import { Construct } from 'constructs';

// Provides up to 65k IPs
const DEFAULT_WORKLOAD_CIDR: string = '100.65.0.0/16';

// Provides up to 16K IPs per subnet
const DEFAULT_WORKLOAD_BLOCKSIZE: number = 18;

/**
 * Ref: https://github.com/aws/amazon-vpc-cni-k8s#eni_config_label_def
 *
 * This is the label key we will use when the {@link getSubnetLabelMap} method
 * is called. This label can be used by the aws-vpc-cni pods to then select the
 * matching `ENIConfig` resource for their availability zone.
 */
export const ENI_CONFIG_LABEL_DEF: string = 'k8s.amazonaws.com/eniConfig';

export interface OptionalWorkloadSubnetProps {
  /**
   * Workload CIDR Range (eg: 100.65.0.0/16)
   */
  readonly cidr?: string;

  /**
   * Per-Subnet Subnet Block Size (eg: 18)
   */
  readonly blockSize?: number;
}

export interface WorkloadSubnetProps extends OptionalWorkloadSubnetProps {
  /**
   * {@link ICluster} reference to the cluster that these Subnets are for.
   */
  readonly cluster: ICluster;

  /**
   * {@link IVpc} reference to the VPC that the Subnets will be created in
   */
  readonly vpc: IVpc;
}

/**
 *
 * The WorkloadSubnets construct creates a dedicated CIDR Range with Subnets for
 * a particular workload. It is expected that the subnetes will host both the
 * EC2 Nodes and the Pod IPs themselves.
 *
 * ** "No" to EKS "Custom Networking Mode"
 *
 * Ref: https://docs.aws.amazon.com/eks/latest/userguide/cni-custom-network.html
 *
 * The "Custom Networking Mode" that AWS proposes in the above doc involves
 * creating dedicated `ENIConfig` resources for each custom Subnet/SecurityGroup
 * mapping that you want to put your workloads onto. The challenge is that your
 * EKS Nodes must also live in the same Availbility Zone as the Subnet in your
 * ENI Config, and a node can only launch Pods on a single ENIConfig.
 *
 * This limitation makes the mapping of Nodes<->ENIConfig complicated, is not
 * cost effective, and greatly increases the complexity of the configuration.
 *
 * ** "Yes" to colocating Nodes and Pods
 *
 * By not running the aws-vpc-cni pods in the custom networking mode, Pods
 * automatically get assigned to the same Subnet Id as the EC2 host. This allows
 * you to scale out multiple {@link WorkloadSubnets}, and then launch compute
 * nodes on those Subnets for scale-out beyond individual CIDR or Subnet limits.
 *
 */
export class WorkloadSubnets extends Construct {
  // Access to the Subnets created by this resource
  public readonly subnets: ISubnet[];

  // Easy access to the SubnetIds created by this resource
  public readonly subnetIds: string[];

  // Access to the settings passed into this construct
  public readonly blockSize: number;
  public readonly cidr: string;

  constructor(scope: Stack, id: string, props: WorkloadSubnetProps) {
    super(scope, id);

    // Get our defaults or the user supplied settings
    this.blockSize = props.blockSize || DEFAULT_WORKLOAD_BLOCKSIZE;
    this.cidr = props.cidr || DEFAULT_WORKLOAD_CIDR;
    this.subnets = [];
    this.subnetIds = [];

    /**
     * Reserve the dedicated CIDR range for the Pods, and attach it to the VPC.
     */
    const cidrBlock = new CfnVPCCidrBlock(this, 'CIDRBlock', {
      vpcId: props.vpc.vpcId,
      cidrBlock: this.cidr,
    });

    /**
     * For each of the existing Private Subnets, we will launch a new Workload
     * Subnet. We attach the new subnet to the same RouteTable as the Existing
     * Subnet to simplify network configuration, and reduce redundant resources.
     */
    props.vpc.privateSubnets.forEach((existingPrivate, i) => {
      /**
       * ref: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-cidr.html
       *
       * The Fn::Cidr function wants you to take the block size and subtract it
       * from 32 to get the final cidrSize that is passed into the function.
       */
      const cidrSize: number = 32 - this.blockSize;

      let routeTableId = existingPrivate.routeTable.routeTableId;

      // Create the Subnet. Use a native CFN resource only here - no constructs
      // - so that we can point to the existing route table ID.
      let subnet = new CfnSubnet(this, `Subnet-${i}`, {
        vpcId: props.vpc.vpcId,
        availabilityZone: existingPrivate.availabilityZone,
        cidrBlock: Fn.select(i, Fn.cidr(this.cidr, props.vpc.availabilityZones.length, cidrSize.toString())),
      });
      subnet.node.addDependency(cidrBlock);

      // Tag the Subnet with a name similar to now the L2 Subnet resource does it.
      Tags.of(subnet).add('Name', subnet.node.path);

      // Associate the new Subnet with the existing Route Table ID in the same zone.
      let routeAssoc = new CfnSubnetRouteTableAssociation(this, `SubnetRouteTableAssociation-${i}`, {
        routeTableId: routeTableId,
        subnetId: subnet.ref,
      });
      routeAssoc.node.addDependency(subnet);

      // Store references to the subnets for our callers
      this.subnets.push(Subnet.fromSubnetId(this, `SubnetLookup-${i}`, subnet.ref));
      this.subnetIds.push(subnet.ref);
    });
  }
}
