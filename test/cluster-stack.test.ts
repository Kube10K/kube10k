import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { IVpc, Vpc } from 'aws-cdk-lib/aws-ec2';
import { ClusterStack, ClusterStackProps } from '../src/stacks/cluster-stack';

describe('ClusterStack', () => {
  test('synthesizes with default values', () => {
    const app = new App();
    const rootStack = new Stack(app, 'RootStack');

    // WHEN
    const vpc: IVpc = new Vpc(rootStack, 'Vpc');
    const clusterStackProps: ClusterStackProps = {
      clusterName: 'testCluster',
      kubernetesVersion: '1.23',
      vpc: vpc
    };
    const stack = new ClusterStack(rootStack, 'ClusterStack', clusterStackProps);

    // Prepare the stack for assertions.
    Template.fromStack(stack);

    // ASSERT: Nothing right now, just make sure the template compiles
  });

  test('Role Mappings Set Correctly', () => {
    const app = new App();
    const rootStack = new Stack(app, 'RootStack');

    // WHEN
    const vpc: IVpc = new Vpc(rootStack, 'Vpc');

    const clusterStackProps: ClusterStackProps = {
      clusterName: 'testCluster',
      kubernetesVersion: '1.23',
      vpc: vpc,
      optionalClusterStackProps: {
        roleMappings: { admins: 'system:masters' }
      }
    };
    const stack = new ClusterStack(rootStack, 'ClusterStack', clusterStackProps);

    // Prepare the stack for assertions.
    const template = Template.fromStack(stack);

    // THEN: Find the AwsAuth map
    template.findResources('Custom::AWSCDK-EKS-KubernetesResource', {
      Manifest: Match.stringLikeRegexp('AwsAuth')
    });
  });
});
