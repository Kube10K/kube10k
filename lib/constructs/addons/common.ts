import { ICluster } from 'aws-cdk-lib/aws-eks';

export const DEFAULT_RESOURCE_PREFIX: string = 'kube10k';

export interface BaseAddonsProps {
  cluster: ICluster;

  /**
   * Customize the prefix used by the resources created within this stack.
   * Default is {@link DEFAULT_RESOURCE_PREFIX}.
   */
  resourcePrefix?: string;
}

export interface HelmChartOverrides {
  /**
   * Helm Chart Settings - Defaults are above.
   */
  repository?: string;
  chart?: string;
  version?: string;
  releaseName?: string;
  values?: { [id: string]: any };
}
