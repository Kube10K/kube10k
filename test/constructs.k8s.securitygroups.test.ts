import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { ClusterSecurityGroups } from '../src/constructs/k8s/securitygroups';

describe('ClusterSecurityGroups', () => {
  test('Create Cluster and Node Security Groups', () => {
    // GIVEN
    const stack = new Stack();
    const vpc = new Vpc(stack, 'TestVPC', {});
    new ClusterSecurityGroups(stack, 'NetworkPrep', { vpc: vpc });

    // COMPILE
    const template = Template.fromStack(stack);

    // ASSERT: 2 Security Groups created
    // * NodeSG
    // * ControlPlaneSG
    template.resourceCountIs('AWS::EC2::SecurityGroup', 2);
  });
});
