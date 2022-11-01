import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Cluster, KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { NodeLocalDns } from '../src/constructs/addons/node-local-dns';

describe('NodeLocalDnsAddon', () => {
  test('Default', () => {
    // GIVEN
    const app = new App();
    const stack = new Stack(app, 'TestStack');
    const testCluster = new Cluster(stack, 'TestCluster', {
      version: KubernetesVersion.V1_21
    });
    new NodeLocalDns(stack, 'NodeLocalDns', {
      cluster: testCluster
    });

    // THEN
    const template = Template.fromStack(stack);

    // ASSERT: The HelmChart resource was created
    template.hasResourceProperties('Custom::AWSCDK-EKS-HelmChart', {
      Release: 'node-local-dns',
      Version: '0.0.3',
      Values: '{"serviceIP":"169.254.20.10","coreDnsIP":"172.20.0.10","ipvsMode":true}',
      Namespace: 'kube-system'
    });
  });
});
