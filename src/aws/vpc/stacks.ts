/** @format */

import * as cdk from 'aws-cdk-lib';
import { IVpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { CoreVpc, CoreVpcProps } from './corevpc';

export interface VpcStackProps extends cdk.NestedStackProps {
  /**
   * Provides access to customize the VPC being created.
   * Ref: {@link CoreVpcProps}
   */
  readonly vpcProps?: CoreVpcProps;
}

export class VpcStack extends cdk.Stack {
  // Resource properties
  public readonly vpc: IVpc;

  constructor(scope: Construct, id: string, props?: VpcStackProps) {
    super(scope, id, props);

    // Create the VPC resource itself
    let vpcProps: CoreVpcProps = props?.vpcProps || {};
    let vpcConstruct: CoreVpc = new CoreVpc(this, id, vpcProps);

    /**
     * Record the final awsec2.Vpc object itself in our properties so that it
     * can be passed around to other stacks and components
     */
    this.vpc = vpcConstruct.vpc;
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
    let vpcProps: CoreVpcProps = props?.vpcProps || {};
    let vpcConstruct: CoreVpc = new CoreVpc(this, id, vpcProps);

    /**
     * Record the final awsec2.Vpc object itself in our properties so that it
     * can be passed around to other stacks and components
     */
    this.vpc = vpcConstruct.vpc;
  }
}
