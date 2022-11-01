import * as cdk from 'aws-cdk-lib';
import { IVpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { CoreVpc, VpcProps } from '../constructs/network/vpc';

export interface VpcStackProps extends cdk.NestedStackProps {
  /**
   * vpcProps provides direct access to customize the nested VPC Stack.
   */
  readonly vpcProps?: VpcProps;
}

export class VpcStack extends cdk.NestedStack {
  /**
   * The VPC in which this Cluster was created
   */
  public readonly vpc: IVpc;

  constructor(scope: Construct, id: string, props?: VpcStackProps) {
    super(scope, id, props);

    // Create the VPC resource itself
    let vpcProps: VpcProps = props?.vpcProps || {};
    let vpcConstruct: CoreVpc = new CoreVpc(this, 'VpcStack', vpcProps);

    /**
     * Record the final awsec2.Vpc object itself in our properties so that it
     * can be passed around to other stacks and components
     */
    this.vpc = vpcConstruct.vpc;
  }
}
