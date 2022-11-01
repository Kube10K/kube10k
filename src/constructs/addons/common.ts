import { ICluster } from 'aws-cdk-lib/aws-eks';

export const DEFAULT_RESOURCE_PREFIX: string = 'kube10k';

export interface IBaseAddonProps {
  readonly cluster: ICluster;

  /**
   * Customize the prefix used by the resources created within this stack.
   * Default is {@link DEFAULT_RESOURCE_PREFIX}.
   */
  readonly resourcePrefix?: string;
}

export interface HelmChartOverrides {
  /**
   * Helm Chart Settings - Defaults are above.
   */
  readonly repository?: string;
  readonly chart?: string;
  readonly version?: string;
  readonly releaseName?: string;
  readonly values?: { [id: string]: any };
}
