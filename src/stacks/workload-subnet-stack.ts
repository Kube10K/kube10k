import * as cdk from 'aws-cdk-lib';
import { Stack } from 'aws-cdk-lib';
import { WorkloadSubnetProps, WorkloadSubnets } from '../kube10k_constructs/k8s/workload-subnets';

/**
 * Wrapper-stack for creating a set of Workload Subnets and associating them
 * with a given VPC object. These are held in their own nested stack for
 * organizational purposes primarily.
 */
export class NestedWorkloadSubnetStack extends cdk.NestedStack {
  public readonly workloadSubnets: WorkloadSubnets;

  constructor(scope: Stack, id: string, props: WorkloadSubnetProps) {
    super(scope, id);
    this.workloadSubnets = new WorkloadSubnets(this, id, props);
  }
}
