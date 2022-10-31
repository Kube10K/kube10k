import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { Cluster, KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { CalicoCni } from '../src/constructs/addons/calico-cni';
import { NodeTaint } from '../src/constructs/k8s/common';

describe('CalicoCniAddon', () => {
  test('Default', () => {
    // GIVEN
    const app = new App();
    const stack = new Stack(app, 'TestStack');
    const testCluster = new Cluster(stack, 'TestCluster', {
      version: KubernetesVersion.V1_21
    });
    const testTaint = new NodeTaint('testKey', 'testValue');
    new CalicoCni(stack, 'CalicoCni', {
      cluster: testCluster,
      nodeTaint: testTaint
    });

    // THEN
    const template = Template.fromStack(stack);

    // ASSERT: namespace created
    template.hasResourceProperties('Custom::AWSCDK-EKS-KubernetesResource', {
      Manifest: Match.stringLikeRegexp('Namespace.*calico-system')
    });

    // ASSERT: The HelmChart resource was created
    template.resourceCountIs('Custom::AWSCDK-EKS-HelmChart', 1);
  });
});
