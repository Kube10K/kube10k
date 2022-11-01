import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { Cluster, KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { ClusterAutoscaler } from '../src/constructs/addons/cluster-autoscaler';
import { NodeTaint } from '../src/constructs/k8s/common';
import { OidcIrsa } from '../src/constructs/k8s/oidc-isra';

describe('ClusterAutoscalerAddon', () => {
  test('Default', () => {
    // GIVEN
    const app = new App();

    const stack = new Stack(app, 'TestStack');
    const nodeTaint = new NodeTaint('key', 'test');
    const testCluster = new Cluster(stack, 'TestCluster', {
      version: KubernetesVersion.V1_21
    });
    const oidcIrsa = new OidcIrsa(stack, 'OidcIrsa', {
      cluster: testCluster
    });
    new ClusterAutoscaler(stack, 'ClusterAutoscaler', {
      cluster: testCluster,
      nodeTaint: nodeTaint,
      oidcIrsa: oidcIrsa
    });

    // THEN
    const template = Template.fromStack(stack);

    // ASSERT: IAM Role is created

    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRoleWithWebIdentity',
            Effect: 'Allow',
            Principal: {
              Federated: {
                'Fn::GetAtt': [Match.anyValue(), 'Arn']
              }
            }
          }
        ]
      }
      //Policies: [
      // VERIFY: The AutoscalerPolicy was applied to the IAM Role
      //  { PolicyName: 'AutoscalerPolicy' }
      // ]
    });

    // ASSERT: The HelmChart resource was created
    template.hasResourceProperties('Custom::AWSCDK-EKS-HelmChart', {
      Release: 'cluster-autoscaler',
      Chart: 'cluster-autoscaler',
      Version: '0.0.2',
      Namespace: 'kube-system'
    });
  });
});
