/** @format */

import * as cdk from "aws-cdk-lib";
import { Stack, StackProps } from "aws-cdk-lib";
import { IVpc } from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import { DefaultVpc, DefaultVpcProps } from "./default_vpc";
import { WorkloadSubnetProps, WorkloadSubnets } from "./workload_subnet";

export interface VpcStackProps extends StackProps {
  /**
   * Provides access to customize the VPC being created.
   * Ref: {@link DefaultVpcProps}
   */
  readonly vpcProps?: DefaultVpcProps;
}

export class VpcStack extends cdk.Stack {
  // Resource properties
  public readonly vpc: IVpc;

  constructor(scope: Construct, id: string, props?: VpcStackProps) {
    super(scope, id, props);

    // Create the VPC resource itself
    let vpcProps: DefaultVpcProps = props?.vpcProps || {};
    let vpcConstruct: DefaultVpc = new DefaultVpc(this, id, vpcProps);

    /**
     * Record the final awsec2.Vpc object itself in our properties so that it can be passed around to other stacks and
     * components
     */
    this.vpc = vpcConstruct.resource;
  }
}

export class NestedVpcStack extends cdk.NestedStack {
  /**
   * The VPC in which this Cluster was created
   */
  public readonly vpc: IVpc;

  constructor(scope: Construct, id: string, props?: VpcStackProps) {
    super(scope, id, props);

    // Create the VPC resource itself
    let vpcProps: DefaultVpcProps = props?.vpcProps || {};
    let vpcConstruct: DefaultVpc = new DefaultVpc(this, id, vpcProps);

    /**
     * Record the final awsec2.Vpc object itself in our properties so that it
     * can be passed around to other stacks and components
     */
    this.vpc = vpcConstruct.resource;
  }
}

/**
 * Wrapper-stack for creating a set of Workload Subnets and associating them
 * with a given VPC object. These are held in their own nested stack for
 * organizational purposes primarily.
 */
export class NestedWorkloadSubnetStack extends cdk.NestedStack {
  public readonly workloadSubnets: WorkloadSubnets;

  constructor(scope: Stack, id: string, props: WorkloadSubnetProps) {
    super(scope, id);
    this.workloadSubnets = new WorkloadSubnets(this, id, props);
  }
}
