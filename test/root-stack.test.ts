import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { RootStack } from '../src/stacks/root-stack';

describe('RootStack', () => {
  test('Default', () => {
    const app = new App();

    // WHEN
    const stack = new RootStack(app, 'RootStack', {});

    // Prepare the stack for assertions.
    const template = Template.fromStack(stack);

    // THEN
    expect(stack.kubernetesVersion).toEqual('1.23');
    expect(stack.clusterName).toEqual('RootStack');

    // ASSERT: Nested Stacks
    // * VpcStack
    // * ClusterStack
    // * WorkloadSubnetStack
    // * NetworkSecurityAddonsStack
    // * SystemNodesStack
    // * ControllerAddonsStack
    template.resourceCountIs('AWS::CloudFormation::Stack', 6);
  });

  test('KubernetesVersion 1.24 throws an error, not supported yet', () => {
    const app = new App();

    // ASSERT: It should throw an error because we don't support 1.24
    expect(
      () =>
        new RootStack(app, 'RootStack', {
          kubernetesVersion: '1.24',
          clusterName: 'test',
        }),
    ).toThrowError();
  });
});
