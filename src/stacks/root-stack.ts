import { CfnElement, CfnTag, Stack, StackProps } from 'aws-cdk-lib';
import { IVpc, Vpc } from 'aws-cdk-lib/aws-ec2';
import { KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { Construct } from 'constructs';
import { OptionalPodSecurityPolicyProps } from '../constructs/addons/psp';
import { NodeTaint } from '../constructs/k8s/common';
import { OptionalManagedNodeGroupProps } from '../constructs/k8s/compute';
import { OptionalWorkloadSubnetProps } from '../constructs/k8s/workload-subnets';
import { addCommonTags } from '../utils';
import { ClusterStack, OptionalClusterStackProps } from './cluster-stack';
import { ControllerAddonsStack } from './controller-addons';
import { ManagedNodeGroupStack, NestedManagedNodeGroupStack } from './managed-node-group-stack';
import { NetworkSecurityAddonsStack } from './network-security-addons';
import { VpcStack, VpcStackProps } from './vpc-stack';
import { NestedWorkloadSubnetStack } from './workload-subnet-stack';

const DEFAULT_KUBERNETES_VERSION = '1.23';
const DEFAULT_SYSTEM_NODE_TAINT_VALUE = 'system';

export interface RootStackProps extends StackProps {
  /**
   * Top Level Parameters: Used throughout the various stacks, common between different
   * nested stacks and components.
   */

  /**
   * Name of the cluster
   */
  clusterName?: string;

  /**
   * KubernetesVersion is the desired Kubernetes Version. See
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/kubernetes-versions.html for details.
   *
   */
  kubernetesVersion?: string;

  /**
   * Optional override that allows setting the NodeVersion to something older
   * than the cluster version during upgrades.
   */
  nodeKubernetesVersion?: string;

  /**
   * CommonTags are a set of CfnTag resources that will be added to every
   * resource created within these stacks. This is how you customize the tagging
   * behavior of the resources for your own environment.
   *
   * NOTE: Tags are only applied to the EKS Cluster at the time of creation per
   * https://github.com/aws/aws-cdk/issues/19388#issuecomment-1268870426.
   */
  commonTags?: CfnTag[];

  /**
   * ExistingVpcId is an optional parameter that will prevent the stack from
   * creating its own VPC, but instead will use a pre-existing VPC. When you
   * bring your own VPC, this stack will still attach to that VPC a dedicated
   * Pod IP range (see VpcStackProps.PodCIDR) and create dedicated subnets and
   * security groups for those pods.
   */
  existingVpcId?: string;

  /**
   * These various parameters allow the clusters more detailed internal
   * configurations to be tuned in more detail. While the default parameters
   * should be good to get started, customized parameters are required when it
   * comes time to truly making this a production cluster.
   */

  /**
   * VpcStackProps provides direct access to customize the nested VPC Stack.
   */
  vpcStackProps?: VpcStackProps;

  /**
   * clusterStackProps provides direct access to customize the Kubernetes cluster
   * beyond the standard top level settings within this RootStackProps resource.
   */
  clusterStackProps?: OptionalClusterStackProps;

  /**
   * Allows customizing the default workload subnet props.
   */
  defaultWorkloadSubnetProps?: OptionalWorkloadSubnetProps;

  /**
   * systemNodesIsolation defines the node labels and taints that will used to
   * isolate the "System" nodes from other normal workloads.
   */
  systemNodesTaint?: NodeTaint;

  /**
   * Customized parameters for the "System" nodes group - this allows
   * customizing the default node sizes, counts, etc.
   */
  systemNodesProps?: OptionalManagedNodeGroupProps;

  /**
   * Customized parameters for the {@link PodSecurityPolicy} addon stack.
   */
  podSecurityPolicy?: OptionalPodSecurityPolicyProps;
}

export class RootStack extends Stack {
  /**
   * The VPC in which this Cluster was created
   */
  readonly vpc: IVpc;

  /**
   * The Kubernetes cluster version
   */
  readonly kubernetesVersion: string;

  /**
   * The name of the kubernetes cluster
   */
  readonly clusterName: string;

  /**
   * Access to the {@link VpcStack}  nested stack, if it gets created.
   */
  readonly vpcStack?: VpcStack;

  /**
   * Access to the {@link ClusterStack} nested stack.
   */
  readonly clusterStack: ClusterStack;

  constructor(scope: Construct, id: string, props: RootStackProps) {
    super(scope, id, props);

    // Set the defaults - these values are set to readonly, so once they are set
    // they cannot be changed later by any of our resources.
    this.kubernetesVersion = props?.kubernetesVersion || DEFAULT_KUBERNETES_VERSION;
    this.clusterName = props?.clusterName || this.stackName;

    /**
     * Iterate through all the supplied CommonTags and add them to all of the
     * native CloudFormatin resources in the app. This only does not apply for
     * Custom Lambda-based resources.
     */
    if (props.commonTags) {
      addCommonTags(scope, props.commonTags);
    }

    /**
     * We support either a "bring your own VPC" or "we create the VPC" model
     * here.
     *
     * The recommended approach is to let us create a VPC for your workload
     * because that VPC is then secured, and narrowly scoped to the EKS cluster
     * and nothing else. If you need to connect your VPC into other VPCs via
     * Peering or VPC Endpoints, that can be done.
     *
     * If you supply your own existing VPC (via the ExistingVpcId property),
     * then we will look up the VPC and use it's existing private subnets for
     * the Kubernetes EC2 nodes. We will modify the VPC though and create a
     * dedicated Pod CIDR range (via the VpcStackProps.PodCIDR property) along
     * with dedicated subnets for the Pods**.
     *
     * If you choose to "bring your own EKS cluster" as well, then we will
     * leverage the existing Public and Private subnets for the EKS Control
     * Plane.
     */
    if (props.existingVpcId) {
      console.log('VPC: Using user-supplied VPC ID (vpcId: %s)', props.existingVpcId);
      this.vpc = Vpc.fromLookup(this, 'VpcLookup', {
        vpcId: props.existingVpcId
      });
    } else {
      console.log('VPC: Using Dedicated VPC');
      let vpcStackProps = props.vpcStackProps || {};
      this.vpcStack = new VpcStack(this, 'VpcStack', vpcStackProps);
      this.vpc = this.vpcStack.vpc;
    }

    /**
     * Create the Cluster Stack - this stack builds an entirely self contained
     * core Kubernetes cluster with EKS, and provides all of the Lambda functions,
     * IAM roles and other resources required to then manage the cluster through
     * CloudFormation.
     */
    this.clusterStack = new ClusterStack(this, 'ClusterStack', {
      ...props.clusterStackProps,
      clusterName: this.clusterName,
      kubernetesVersion: this.kubernetesVersion,
      vpc: this.vpc,
      commonTags: props.commonTags
    });

    /**
     * In a teardown, make sure we don't try to tear down the VPC stack until
     * after the Cluster stack is fully torn down.
     */
    if (this.vpcStack) {
      this.clusterStack.addDependency(this.vpcStack);
    }

    /**
     * Prepare the VPC and Cluster by creating new dedicated subnets for the Pods.
     */
    const defaultWorkloadSubnets = new NestedWorkloadSubnetStack(this, 'DefaultWorkloadSubnets', {
      ...props.defaultWorkloadSubnetProps,
      vpc: this.vpc,
      cluster: this.clusterStack.cluster.cluster
    });

    /**
     * Define the "Taints" that are going to be used for the System nodes. These
     * will then be used to taint the booted nodes, as well as for a variety of
     * our nested stacks to "tolerate" the taints.
     */
    const systemNodeTaint =
      props.systemNodesTaint || new NodeTaint(undefined, DEFAULT_SYSTEM_NODE_TAINT_VALUE, undefined, true);

    /**
     * Create our initial "core addons" stack. This stack pre-creates a number
     * of configuration pieces that are so critical that they happen _before_ we
     * boot EC2 nodes at all.
     *
     * **Example: Node Local DNS and IPVS Mode**
     *
     * The EC2 nodes launched by the ManagedNodeGroup will be configured to
     * point pods to a particular IP address for DNS. This IP address is a fake
     * IP that the {@link NodeLocalDns} construct creates.
     *
     */
    const coreAddonsStack: NetworkSecurityAddonsStack = new NetworkSecurityAddonsStack(this, 'AddonsStack', {
      cluster: this.clusterStack.cluster.cluster,
      kubernetesVersion: KubernetesVersion.of(props.nodeKubernetesVersion || this.kubernetesVersion),
      nodeTaint: systemNodeTaint,
      podSecurityProps: props.podSecurityPolicy,
      oidcIrsa: this.clusterStack.oidcIrsa
    });

    /**
     * Create the "System Nodes" group of core system EC2 nodes launched through
     * the ManagedNodeGroup.
     */
    const systemNodesStack: ManagedNodeGroupStack = new NestedManagedNodeGroupStack(this, 'SystemNodesStack', {
      ...props.systemNodesProps,
      kubernetesVersion: KubernetesVersion.of(props.nodeKubernetesVersion || this.kubernetesVersion),
      subnets: defaultWorkloadSubnets.workloadSubnets.subnets,
      clusterRoles: this.clusterStack.clusterRoles,
      clusterNetwork: this.clusterStack.clusterSecurityGroups,
      cluster: this.clusterStack.cluster.cluster,
      nodeTaints: systemNodeTaint,
      clusterDnsIp: [coreAddonsStack.nodeLocalDns.serviceIp]
    });
    systemNodesStack.node.addDependency(coreAddonsStack);

    /**
     * Once the System nodes have been installed, we can now start spinning up
     * various custom controllers that add real functionality into the cluster.
     */
    const controllerAddonsStack: ControllerAddonsStack = new ControllerAddonsStack(this, 'ControllerAddonsStack', {
      cluster: this.clusterStack.cluster.cluster,
      kubernetesVersion: KubernetesVersion.of(props.nodeKubernetesVersion || this.kubernetesVersion),
      nodeTaint: systemNodeTaint,
      oidcIrsa: this.clusterStack.oidcIrsa
    });
    controllerAddonsStack.addDependency(systemNodesStack);
  }
  /**
   *
   * Ref: https://github.com/aws/aws-cdk/issues/18053#issuecomment-1285850468.
   *
   * The default CDK behavior for NestedStacks is to create a wildly-long nested
   * stack resource name - eg
   * "VpcStackNestedStackVpcStackNestedStackResource29F739B2". It's technically
   * OK, but makes for resource names and exports/outputs that are just really
   * noisy.
   *
   * This patch turns "VpcStackNestedStackVpcStackNestedStackResource29F739B2"
   * into "VpcStack", providing much cleaner nested stack names.
   *
   * @param cfnElement
   * @returns
   */
  protected allocateLogicalId(cfnElement: CfnElement): string {
    if (cfnElement.node.id.endsWith('.NestedStackResource')) {
      return cfnElement.node.id.slice(0, -'.NestedStackResource'.length);
    } else {
      return super.allocateLogicalId(cfnElement);
    }
  }
}
