import { NestedStack, Stack } from 'aws-cdk-lib';
import { ICluster, KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { ClusterAutoscaler } from '../constructs/addons/cluster-autoscaler';
import { NodeTaint } from '../constructs/k8s/common';
import { OidcIrsa } from '../constructs/k8s/oidc-isra';

export interface ControllerAddonsProps {
  readonly cluster: ICluster;
  readonly kubernetesVersion: KubernetesVersion;
  readonly nodeTaint: NodeTaint;

  /**
   * Used for setting up Role<->ServiceAccount mappings
   */
  readonly oidcIrsa: OidcIrsa;
}

export class ControllerAddonsStack extends NestedStack {
  constructor(scope: Stack, id: string, props: ControllerAddonsProps) {
    super(scope, id);
    /**
     * Install the Cluster Autoscaler - it's only used for autoscaling our
     * {@link ManagedNodeGroup} compute classes.
     */
    new ClusterAutoscaler(this, 'ClusterAutoscaler', {
      cluster: props.cluster,
      oidcIrsa: props.oidcIrsa,
      nodeTaint: props.nodeTaint
    });
  }
}
