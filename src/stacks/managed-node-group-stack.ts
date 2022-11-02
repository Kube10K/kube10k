import * as cdk from 'aws-cdk-lib';
import { Stack } from 'aws-cdk-lib';
import { ManagedNodeGroup, ManagedNodeGroupProps } from '../kube10k_constructs/k8s/compute';

/**
 * Wrapper-stack for creating a single nested stack with a Managed Node Group.
 * We directly pass in the @link ManagedNodeGroupProps, allowing the user to
 * customize the construct how they wish.
 *
 * A nested stack is used for resource isolation - it makes it much easier to
 * handle dependency ordering and to keep the Root Stack from growing too large.
 */
export class NestedManagedNodeGroupStack extends cdk.NestedStack {
  readonly nodeGroup: ManagedNodeGroup;
  constructor(scope: Stack, id: string, props: ManagedNodeGroupProps) {
    super(scope, id);
    this.nodeGroup = new ManagedNodeGroup(this, id, props);
  }
}

/**
 * A separate wrapper-stack for creating a dedicated one-off CloudFormation
 * Stack that launches a Managed Node Group. This would be used if you wish to
 * create multiple managed nodegroups that the default RootStack does not
 * support.
 */
export class ManagedNodeGroupStack extends cdk.Stack {
  readonly nodeGroup: ManagedNodeGroup;
  constructor(scope: Stack, id: string, props: ManagedNodeGroupProps) {
    super(scope, id);
    this.nodeGroup = new ManagedNodeGroup(this, id, props);
  }
}
