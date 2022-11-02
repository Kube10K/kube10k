import { App, NestedStack, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { Cluster, KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { PodSecurityPolicy } from '../src/kube10k_constructs/addons/psp';
describe('PodSecurityPoliciesAddon', () => {
  test('Default', () => {
    // GIVEN
    const app = new App();
    const rootStack = new Stack(app, 'RootStack');
    const testCluster = new Cluster(rootStack, 'TestCluster', {
      version: KubernetesVersion.V1_21,
    });
    const stack = new NestedStack(rootStack, 'TestStack');
    new PodSecurityPolicy(stack, 'PodSecurityPolicies', {
      cluster: testCluster,
    });

    // THEN
    const template = Template.fromStack(stack);

    // ASSERT: Count the number of Resources created.
    template.resourceCountIs('Custom::AWSCDK-EKS-KubernetesResource', 7);

    // ASSERT: The ClusterRole Permissions ClusterRole Patch has been applied
    template.hasResourceProperties('Custom::AWSCDK-EKS-KubernetesResource', {
      Manifest: Match.stringLikeRegexp('.*PodSecurityPolicy.*kube10k.restricted.*'),
    });
  });
});
