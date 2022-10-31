import { NestedStack, Stack } from 'aws-cdk-lib';
import { ICluster, KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { AwsVpcCni } from '../constructs/addons/aws-vpc-cni';
import { CalicoCni } from '../constructs/addons/calico-cni';
import { CoreDns } from '../constructs/addons/coredns';
import { NodeLocalDns } from '../constructs/addons/node-local-dns';
import { PriorityClasses } from '../constructs/addons/priority-classes';
import { OptionalPodSecurityPolicyProps, PodSecurityPolicy } from '../constructs/addons/psp';
import { NodeTaint } from '../constructs/k8s/common';
import { OidcIrsa } from '../constructs/k8s/oidc-isra';

export interface NetworkSecurityAddonsProps {
  cluster: ICluster;
  kubernetesVersion: KubernetesVersion;
  nodeTaint: NodeTaint;

  /**
   * Used for setting up Role<->ServiceAccount mappings
   */
  oidcIrsa: OidcIrsa;

  /**
   * Customizable access to tweak the {@link PodSecurityPolicy} addon construct.
   */
  podSecurityProps?: OptionalPodSecurityPolicyProps;
}

export class NetworkSecurityAddonsStack extends NestedStack {
  public readonly coreDns: CoreDns;
  public readonly nodeLocalDns: NodeLocalDns;

  constructor(scope: Stack, id: string, props: NetworkSecurityAddonsProps) {
    super(scope, id);

    /**
     * Patch the CoreDNS system to be more resilient and isolated
     */
    this.coreDns = new CoreDns(this, 'CoreDns', {
      cluster: props.cluster,
      nodeTaint: props.nodeTaint,
      kubernetesVersion: props.kubernetesVersion
    });

    /**
     * Install the Node Local DNS service in the cluster - this is a DNS
     * caching service installed on each node.
     */
    this.nodeLocalDns = new NodeLocalDns(this, 'NodeLocalDns', {
      cluster: props.cluster
    });

    /**
     * Install PodSecurityPolicies to limit dangerous PodSpecs.
     *
     * TODO: When EKS supports 1.24+ where PSPs are fully deprecated, this code
     * will need to avoid installing them.
     *
     * TODO: Implement alternative with PSAs.
     */
    new PodSecurityPolicy(this, 'PodSecurityPolicies', {
      ...props.podSecurityProps,
      cluster: props.cluster
    });

    /**
     * Install the PriorityClasses addons
     */
    new PriorityClasses(this, 'PriorityClasses', {
      cluster: props.cluster
    });

    /**
     * Set up the AWS VPC CNI Drivers
     */
    new AwsVpcCni(this, 'AwsVpcCni', {
      cluster: props.cluster,
      oidcIrsa: props.oidcIrsa
    });

    /**
     * Set up the Calico CNI system for providing pod-to-pod security limits.
     * Note this is complimentary to the AwsVpcCni stack above.
     */
    new CalicoCni(this, 'CalicoCni', {
      cluster: props.cluster,
      nodeTaint: props.nodeTaint
    });
  }
}
