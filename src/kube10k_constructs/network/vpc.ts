import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import {
  DefaultInstanceTenancy,
  GatewayVpcEndpointOptions,
  NatProvider,
  Port,
  SubnetConfiguration,
  SubnetType,
} from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

const DEFAULT_PUBLIC_SUBNET_BLOCK_SIZE: number = 24;
const DEFAULT_PRIVATE_SUBNET_BLOCK_SIZE: number = 20;
const DEFAULT_CIDR: string = '100.64.0.0/16';
const DEFAULT_MAX_AZS: number = 3;
const DEFAULT_INSTANCE_TENANCY: DefaultInstanceTenancy = DefaultInstanceTenancy.DEFAULT;
const DEFAULT_GATEWAY_ENDPOINTS: { [id: string]: GatewayVpcEndpointOptions } = {
  S3: { service: cdk.aws_ec2.GatewayVpcEndpointAwsService.S3 },
  DynamoDB: { service: cdk.aws_ec2.GatewayVpcEndpointAwsService.DYNAMODB },
};
const DEFAULT_INTERFACE_ENDPOINTS: ec2.InterfaceVpcEndpointAwsService[] = [
  ec2.InterfaceVpcEndpointAwsService.EC2,
  ec2.InterfaceVpcEndpointAwsService.STS,
  ec2.InterfaceVpcEndpointAwsService.ECR,
  ec2.InterfaceVpcEndpointAwsService.ECR_DOCKER,
];

export interface VpcProps extends cdk.StackProps {
  /**
   * The desired "name" of the VPC.
   */
  readonly name?: string;

  /**
   * The CIDR range to use for the VPC. If not supplied, then the DEFAULT_CIDR
   * will be used.
   *
   * @default "100.64.0.0/16"
   */
  readonly cidr?: string;

  /**
   * The maximum number of AZs to leverage in the target AWS region for the VPC.
   * We default is DEFAULT_MAX_AZs to 3 because most regions only have 3 AZs,
   * and because it's easier in most cases to think about quorums for stateful
   * services like Zookeeper when you only 3 zones.
   *
   * @default 3
   */
  readonly maxAZs?: number;

  /**
   * The subnet size for the Public subnets. These Public subnets are only
   * used for things like ALB ENIs when you are exposing services to the
   * internet, otherwise everything is launched on Private Subnets.
   *
   * @default 24
   */
  readonly publicSubnetBlockSize?: number;

  /**
   * The subnet size for the Private subnets. These subnets generally should
   * be very large to support a large number of EC2 instances in each one. A
   * separate CIDR range will be used for the Pods.
   *
   * @default 20
   */
  readonly privateSubnetBlockSize?: number;

  /**
   * The EC2 instance tenancy default for the VPC.
   */
  readonly defaultInstanceTenancy?: DefaultInstanceTenancy;

  /**
   * List of desired EC2 Gateway VPC Endpoints to be created within the VPC.
   */
  readonly gatewayEndpoints?: { [id: string]: GatewayVpcEndpointOptions };

  /**
   * List of customized EC2 Interface VPC Endpoints to be created within the VPC.
   */
  readonly interfaceEndpoints?: ec2.InterfaceVpcEndpointAwsService[];
}

export class CoreVpc extends Construct {
  /**
   * Reference to the raw VPC object created
   */
  readonly vpc: cdk.aws_ec2.IVpc;

  /**
   *
   * @param scope
   * @param id
   * @param props
   */
  constructor(scope: Construct, id: string, props: VpcProps) {
    super(scope, id);

    /**
     * These IPv4 subnets are created for any resources that might live in the
     * VPC that are not yet IPv6 compatible
     */
    let subnets: SubnetConfiguration[] = [
      {
        name: 'Private',
        subnetType: SubnetType.PRIVATE_WITH_EGRESS,
        cidrMask: props.privateSubnetBlockSize || DEFAULT_PRIVATE_SUBNET_BLOCK_SIZE,
      },
      {
        name: 'Public',
        subnetType: SubnetType.PUBLIC,
        cidrMask: props.publicSubnetBlockSize || DEFAULT_PUBLIC_SUBNET_BLOCK_SIZE,
      },
    ];

    /**
     *  https://github.com/aws/aws-cdk/blob/main/packages/%40aws-cdk/aws-ec2/lib/vpc.ts
     */
    this.vpc = new ec2.Vpc(this, 'Vpc', {
      /**
       * Disabled/Explicitly Not Set settings:
       *
       *
       * AvailabilityZones: Explicitly not set because we always use `MaxAzs`.
       * FlowLogs: Can be added by users on their own through addFlowLog().
       * VpnConnections: Can be added by users on their own through addVpnConnection()
       * VpnGateway: Not exposed at this time.
       * VpnGatewayAsn: Not exposed at this time.
       * VpnRoutePropagation: Not exposed at this time.
       */

      /**
       * Set the "Name" of the VPC to something usable. We default to the name
       * of the stack itself, which is fine in most cases. Users can override
       * this through the Props.Name property.
       */
      vpcName: props.name || this.node.path,

      /**
       * Because this VPC is designed to be dedicated to the EKS workload and
       * nothing else, most users should not need to (or want to) set the
       * CIDR. CdkCluster-to-CdkCluster communication should be done through
       * VPC Endpoints, NLBs, or public Elastic IPs.
       */
      cidr: props.cidr || DEFAULT_CIDR,

      /**
       * In rare situations an operator may need their hardware to be isolated
       * from other AWS customers, so this is customizable.
       */
      defaultInstanceTenancy: props.defaultInstanceTenancy || DEFAULT_INSTANCE_TENANCY,

      // Always enable the DNS service within the VPC.
      enableDnsSupport: true,

      // Do not create Public hostnames for our EC2 instances. Our instances are all going to be private.
      enableDnsHostnames: true,

      // https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html
      gatewayEndpoints: props.gatewayEndpoints || DEFAULT_GATEWAY_ENDPOINTS,

      /**
       * NatGatewayProvider is always set to the AWS-managed NAT Gateways for reliability and scale.
       * https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html
       */
      natGatewayProvider: NatProvider.gateway(),

      /**
       * NatGateways: We deliberately do not expose this parameter to ensure we
       * have a NAT Gateway in each AZ.
       *
       * NatGatewaySubnets: We do not expose more than one set of Public
       * Subnets, so not necessary to set this.
       */

      /**
       * The default value is 3 - but in many of Amazon's regions there are 4
       * AZs or even more. We set the default behavior to 4 so that a cluster
       * may take advantage of as much hardware availability as possible. This
       * setting is customizable though because there are some situations where
       * you may want to limit this to 3.
       */
      maxAzs: props.maxAZs || DEFAULT_MAX_AZS,

      /**
       * We customize the size of the subnets so that our public subnets are
       * smaller and our private subnets are very large. See the
       * SubnetConfiguration above.
       */
      subnetConfiguration: subnets,
    });

    const interfaceEndpoints = props.interfaceEndpoints || DEFAULT_INTERFACE_ENDPOINTS;
    interfaceEndpoints.forEach((element) => {
      /**
       * Add in VPC Endpoints that are recommended by AWS. These endpoints cost
       * money, but if you're running this stack, you know that.
       */
      let endpoint = this.vpc.addInterfaceEndpoint(element.shortName, { service: element });

      /**
       * The default VPC Endpoints created by the {@link addInterfaceEndpoint}
       * method only allow the primary CIDR access into them. Because we add
       * multiple CIDR via our {@link WorkloadSubnets} construct, we need to
       * instead handle the security by allowing access from anywhere in the
       * VPC.
       */
      endpoint.connections.allowFromAnyIpv4(Port.allTcp());
    });
  }
}
