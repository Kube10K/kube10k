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
