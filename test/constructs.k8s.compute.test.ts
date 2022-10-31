import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { CfnLaunchTemplate, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Cluster, KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { NodeTaint, TaintedNodeEffect } from '../lib/constructs/k8s/common';
import { ManagedNodeGroup } from '../lib/constructs/k8s/compute';
import { ClusterRoles } from '../lib/constructs/k8s/roles';
import { ClusterSecurityGroups } from '../lib/constructs/k8s/securitygroups';

describe('Compute', () => {
  test('Default Behavior', () => {
    // PREP
    const app = new App();
    const stack = new Stack(app, 'Stack');
    const vpc = new Vpc(stack, 'TestVpc');
    const clusterRoles = new ClusterRoles(stack, 'TestRoles');
    const clusterNetworkPrep = new ClusterSecurityGroups(stack, 'TestNetworkPrep', {
      vpc: vpc
    });
    const testCluster = new Cluster(stack, 'TestCluster', {
      version: KubernetesVersion.V1_21
    });

    // THEN: Create the construct
    const testManagedNodeGroup = new ManagedNodeGroup(stack, 'TestGroup', {
      cluster: testCluster,
      clusterRoles: clusterRoles,
      clusterNetwork: clusterNetworkPrep,
      kubernetesVersion: KubernetesVersion.V1_21,
      subnets: vpc.privateSubnets
    });

    // COMPILE
    const template = Template.fromStack(stack);

    // ASSERT: LaunchTemplate Created Successfully
    template.hasResourceProperties('AWS::EC2::LaunchTemplate', {
      LaunchTemplateData: {
        // VERIFY: Block Device Sizes set correctly
        BlockDeviceMappings: [
          {
            DeviceName: '/dev/xvda',
            Ebs: {
              DeleteOnTermination: true,
              Encrypted: true,
              VolumeSize: 5,
              VolumeType: 'gp3'
            }
          },
          {
            DeviceName: '/dev/xvdb',
            Ebs: {
              DeleteOnTermination: true,
              Encrypted: true,
              VolumeSize: 100,
              VolumeType: 'gp3'
            }
          }
        ],

        // VERIFY: TagSpecifications Set Properly
        TagSpecifications: [
          {
            ResourceType: 'instance',
            Tags: [
              { Key: 'CLUSTER_ID', Value: Match.anyValue() },
              { Key: 'Name', Value: 'Stack/TestGroup/LaunchTemplate-v1' }
            ]
          },
          {
            ResourceType: 'volume',
            Tags: [
              { Key: 'CLUSTER_ID', Value: Match.anyValue() },
              { Key: 'Name', Value: 'Stack/TestGroup/LaunchTemplate-v1' }
            ]
          }
        ]
      }
    });

    // ASSERT: LaunchTemplate Created Successfully
    template.resourceCountIs('AWS::EKS::Nodegroup', 3);
    template.hasResourceProperties('AWS::EKS::Nodegroup', {
      // VERIFY: InstanceTypes set properly from the default
      InstanceTypes: [
        'm5.large',
        'm5a.large',
        'm5n.large',
        'm5zn.large',
        'm5ad.large',
        'm5ad.large',
        'm6a.large',
        'm6i.large',
        'm6id.large',
        't3.large',
        't3a.large'
      ],

      // VERIFY: Node bootup Labels have been applied
      Labels: {
        'kube10k/provisioner': 'cluster-autoscaler',
        'kube10k/stack': 'Stack'
      },

      // VERIFY: Capacity Type set properly from the default
      CapacityType: 'ON_DEMAND',

      // VERIFY: ScalingCOnfig set properly from the default
      ScalingConfig: {
        DesiredSize: 1,
        MinSize: 1,
        MaxSize: 100
      },

      // VERIFY: LaunchTemplate References are correct
      LaunchTemplate: {
        Id: {
          Ref: stack.getLogicalId(testManagedNodeGroup.launchTemplate.node.defaultChild as CfnLaunchTemplate)
        },
        Version: {
          'Fn::GetAtt': [
            stack.getLogicalId(testManagedNodeGroup.launchTemplate.node.defaultChild as CfnLaunchTemplate),
            'LatestVersionNumber'
          ]
        }
      }
    });
  });

  test('with custom parameters', () => {
    // PREP
    const app = new App();
    const stack = new Stack(app, 'Stack');
    const vpc = new Vpc(stack, 'TestVpc');
    const clusterRoles = new ClusterRoles(stack, 'TestRoles');
    const clusterNetworkPrep = new ClusterSecurityGroups(stack, 'TestNetworkPrep', {
      vpc: vpc
    });
    const testCluster = new Cluster(stack, 'TestCluster', {
      version: KubernetesVersion.V1_21
    });

    // THEN: Create the construct
    const group = new ManagedNodeGroup(stack, 'TestGroup', {
      cluster: testCluster,
      clusterRoles: clusterRoles,
      clusterNetwork: clusterNetworkPrep,
      kubernetesVersion: KubernetesVersion.V1_21,
      nodeTaints: new NodeTaint('testKey', 'testValue', TaintedNodeEffect.NO_EXECUTE),
      subnets: vpc.privateSubnets,
      clusterDnsIp: ['1.2.3.4']
    });

    // COMPILE
    const template = Template.fromStack(stack);

    // ASSERT: The bottlerocketSettings cluster-dns-ip was set
    expect(group.bottleRocketSettings.kubernetes['cluster-dns-ip']).toEqual(['1.2.3.4']);

    // ASSERT: The bottlerocketSettings taints were added
    expect(group.bottleRocketSettings.kubernetes['node-taints']).toEqual({
      testKey: 'testValue:NoExecute'
    });

    // ASSERT: LaunchTemplate Created Successfully
    template.hasResourceProperties('AWS::EC2::LaunchTemplate', {
      LaunchTemplateData: {
        // NOTE: Not testing UserData - it's hard to test it at this level, and
        // we have other tests for the BottleRocketSettings resource.

        // VERIFY: TagSpecifications Set Properly
        TagSpecifications: [
          {
            ResourceType: 'instance',
            Tags: [
              { Key: 'CLUSTER_ID', Value: Match.anyValue() },
              { Key: 'k8s.cluster-auto-scaler/node-template/taint/testKey', Value: 'testValue:NoExecute' },
              { Key: 'Name', Value: 'Stack/TestGroup/LaunchTemplate-v1' }
            ]
          },
          {
            ResourceType: 'volume',
            Tags: [
              { Key: 'CLUSTER_ID', Value: Match.anyValue() },
              { Key: 'k8s.cluster-auto-scaler/node-template/taint/testKey', Value: 'testValue:NoExecute' },
              { Key: 'Name', Value: 'Stack/TestGroup/LaunchTemplate-v1' }
            ]
          }
        ]
      }
    });
  });
});
