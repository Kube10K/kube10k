import { ICluster, KubernetesManifest } from 'aws-cdk-lib/aws-eks';
import { Construct } from 'constructs';
import { DEFAULT_RESOURCE_PREFIX } from '../../common';

const DEFAULT_PRIORITY_CLASS_VALUE: number = 1000000;

export interface PriorityClassesProps {
  readonly cluster: ICluster;

  /**
   * Customize the prefix used by the resources created within this stack.
   * Default is {@link DEFAULT_RESOURCE_PREFIX}.
   */
  readonly resourcePrefix?: string;
}

export class PriorityClasses extends Construct {
  constructor(scope: Construct, id: string, props: PriorityClassesProps) {
    super(scope, id);
    const resourcePrefix = props.resourcePrefix || DEFAULT_RESOURCE_PREFIX;
    /**
     * Create a default PriorityClass for the cluster and assign it a value.
     * This sets the standard "middle ground" for all pods that do not define
     * their own PriorityClass.
     */
    new KubernetesManifest(this, 'Default-PriorityClass', {
      cluster: props.cluster,
      prune: true,
      skipValidation: false,
      overwrite: false,
      manifest: [
        {
          apiVersion: 'scheduling.k8s.io/v1',
          kind: 'PriorityClass',
          metadata: {
            name: `${resourcePrefix}.default`
          },
          value: DEFAULT_PRIORITY_CLASS_VALUE,
          globalDefault: true,
          description: 'Default PriorityClass that provides even scheduling with other default pods.'
        }
      ]
    });
  }
}
