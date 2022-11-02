import { Stack } from 'aws-cdk-lib';
import { Capture, Template } from 'aws-cdk-lib/assertions';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { ClusterRoles } from '../src/constructs/k8s/roles';

describe('Roles', () => {
  test('Create Cluster Roles', () => {
    // GIVEN
    const stack = new Stack();
    new ClusterRoles(stack, 'ClusterRoles', {});

    // COMPILE
    const template = Template.fromStack(stack);

    // ASSERT: 3 IAM Roles created
    // * NodeRole
    // * ClusterRole
    // * MasterRole
    template.resourceCountIs('AWS::IAM::Role', 3);

    // ASSERT: Node Role Exists
    template.hasResource('AWS::IAM::Role', {
      Properties: {
        Description: 'Default/Minimal EC2 Node Role',
      },
    });

    // ASSERT: Cluster Role Exists
    template.hasResource('AWS::IAM::Role', {
      Properties: {
        Description: 'Default/Minimal EKS CdkCluster Service Role',
      },
    });

    template.hasResource('AWS::IAM::Role', {
      Properties: {
        Description: 'Default/Minimal EKS Master Access Role',
      },
    });
  });

  test('Create Cluster Roles with existing Master Role ARN', () => {
    // GIVEN
    const stack = new Stack();
    new ClusterRoles(stack, 'ClusterRoles', {
      existingMasterRole: 'existingRole',
    });

    // COMPILE
    const template = Template.fromStack(stack);

    // ASSERT: 2 IAM Roles created
    // * NodeRole
    // * ClusterRole
    template.resourceCountIs('AWS::IAM::Role', 2);

    // ASSERT: Node Role Exists
    template.hasResource('AWS::IAM::Role', {
      Properties: {
        Description: 'Default/Minimal EC2 Node Role',
      },
    });

    // ASSERT: Cluster Role Exists
    template.hasResource('AWS::IAM::Role', {
      Properties: {
        Description: 'Default/Minimal EKS CdkCluster Service Role',
      },
    });
  });

  test('Create Cluster Roles with custom policies', () => {
    // GIVEN
    const capture = new Capture();
    const stack = new Stack();
    new ClusterRoles(stack, 'ClusterRoles', {
      nodeRolePolicyStatement: [
        new PolicyStatement({
          effect: Effect.ALLOW,
          actions: ['ecr:CreateRepository'],
          resources: ['*'],
        }),
      ],
    });

    // COMPILE
    const template = Template.fromStack(stack);

    // ASSERT: 1 IAM Policy created
    template.resourceCountIs('AWS::IAM::Policy', 1);

    // ASSERT: IAM Policy references the NodeRole
    template.hasResource('AWS::IAM::Policy', {
      Properties: {
        Roles: [{ Ref: capture }],
      },
    });
    expect(capture.asString().match(/NodeRole/)).toBeDefined();
  });
});
