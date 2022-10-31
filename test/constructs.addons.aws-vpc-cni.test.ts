import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { Cluster, KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { AwsVpcCni } from '../lib/constructs/addons/aws-vpc-cni';
import { OidcIrsa } from '../lib/constructs/k8s/oidc-isra';

describe('AwsVpcCni', () => {
  test('Default', () => {
    // GIVEN
    const app = new App();
    const stack = new Stack(app, 'TestStack');
    const testCluster = new Cluster(stack, 'TestCluster', {
      version: KubernetesVersion.V1_21,
    });
    const oidcIrsa = new OidcIrsa(stack, 'OidcIrsa', {
      cluster: testCluster,
    });
    const construct = new AwsVpcCni(stack, 'awsVpcCni', {
      cluster: testCluster,
      oidcIrsa: oidcIrsa,
    });

    // THEN
    const template = Template.fromStack(stack);

    // ASSERT: The IAM Role is created and looks roughly right
    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRoleWithWebIdentity',
            Effect: 'Allow',
            Principal: {
              Federated: {
                'Fn::GetAtt': [Match.anyValue(), 'Arn'],
              },
            },
          },
        ],
      },
      ManagedPolicyArns: [
        { 'Fn::Join': ['', ['arn:', { Ref: 'AWS::Partition' }, ':iam::aws:policy/AmazonEKS_CNI_Policy']] },
      ],
    });

    // ASSERT: The original aws-node daemonset is patched to be disabled
    template.hasResourceProperties('Custom::AWSCDK-EKS-KubernetesPatch', {
      ResourceName: 'daemonset/aws-node',
      ResourceNamespace: 'kube-system',
    });

    // ASSERT: The EKS PSP Access was created
    template.hasResourceProperties('Custom::AWSCDK-EKS-KubernetesResource', {
      Manifest: Match.stringLikeRegexp('kube-system.*eks:podsecuritypolicy:privileged'),
    });

    // ASSERT: The HelmChart resource was created
    template.hasResourceProperties('Custom::AWSCDK-EKS-HelmChart', {
      Chart: 'aws-vpc-cni',
      Namespace: 'kube-system',
      Release: 'aws-vpc-cni',
      Repository: 'https://aws.github.io/eks-charts',
      Timeout: '300s',
      Version: '1.1.21',
      Wait: true,
    });
  });

  test('Verify Reserved Name is Protected', () => {
    // GIVEN
    const app = new App();
    const stack = new Stack(app, 'TestStack');
    const testCluster = new Cluster(stack, 'TestCluster', {
      version: KubernetesVersion.V1_21,
    });
    const oidcIrsa = new OidcIrsa(stack, 'OidcIrsa', {
      cluster: testCluster,
    });

    // https://github.com/facebook/jest/issues/7425#issuecomment-442737001
    expect(
      () =>
        new AwsVpcCni(stack, 'awsVpcCni', {
          cluster: testCluster,
          oidcIrsa: oidcIrsa,
          helm: {
            releaseName: 'aws-node',
          },
        }),
    ).toThrowError();
  });
});
