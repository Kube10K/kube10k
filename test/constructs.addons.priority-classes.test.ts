import { App, NestedStack, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Cluster, KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { PriorityClasses } from '../src/constructs/addons/priority-classes';

describe('PriorityClassesAddons', () => {
  test('Default', () => {
    // GIVEN
    const app = new App();
    const rootStack = new Stack(app, 'RootStack');
    const testCluster = new Cluster(rootStack, 'TestCluster', {
      version: KubernetesVersion.V1_21,
    });
    const stack = new NestedStack(rootStack, 'TestStack');
    new PriorityClasses(stack, 'PriorityClasses', {
      cluster: testCluster,
    });

    // THEN
    const template = Template.fromStack(stack);

    // ASSERT: Count the number of Resources created.
    template.resourceCountIs('Custom::AWSCDK-EKS-KubernetesResource', 1);
  });
});
