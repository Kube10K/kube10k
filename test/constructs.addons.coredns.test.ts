import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { Cluster, KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { CoreDns } from '../src/kube10k_constructs/addons/coredns';
import { NodeTaint } from '../src/kube10k_constructs/k8s/common';

describe('CoreDnsAddon', () => {
  test('Default', () => {
    // GIVEN
    const app = new App();
    const stack = new Stack(app, 'TestStack');
    const testCluster = new Cluster(stack, 'TestCluster', {
      version: KubernetesVersion.V1_21,
    });
    const nodeTaints = new NodeTaint('testKey', 'testValue');
    new CoreDns(stack, 'CoreDns', {
      cluster: testCluster,
      kubernetesVersion: KubernetesVersion.V1_21,
      nodeTaint: nodeTaints,
    });

    // THEN
    const template = Template.fromStack(stack);

    // ASSERT: The ClusterRole Permissions ClusterRole Patch has been applied
    template.hasResourceProperties('Custom::AWSCDK-EKS-KubernetesResource', {
      Manifest: Match.stringLikeRegexp('.*ClusterRole.*system:coredns.*'),
    });

    // ASSERT: The PodDisruptionBudget has ben applied
    template.hasResourceProperties('Custom::AWSCDK-EKS-KubernetesResource', {
      Manifest: Match.stringLikeRegexp('.*PodDisruptionBudget.*core-dns.*'),
    });

    // ASSERT: The Deployment Patch has been applied
    template.hasResourceProperties('Custom::AWSCDK-EKS-KubernetesPatch', {
      ResourceName: 'deployment/coredns',
      ResourceNamespace: 'kube-system',
    });
  });
});
