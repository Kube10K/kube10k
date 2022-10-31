import { App, CfnTag, Tags } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export function getStackName(app: App, stackName: string): string {
  return getContextValueAsString(app, 'StackPrefix') + '-' + stackName;
}

export function getClusterName(app: App): string {
  const prefix = getContextValueAsString(app, 'StackPrefix').toLocaleLowerCase();
  const name = getContextValueAsString(app, 'ClusterName').toLocaleLowerCase();
  return prefix + '-' + 'name';
}

export function getContextValueAsString(app: App, contextValue: string): string {
  const raw = app.node.tryGetContext(contextValue);
  if (raw == null) {
    console.warn(contextValue + ' is unset, returning empty string\n');
    return '';
  }
  const str = String(raw);
  console.log('{contextValue} set to: {str}');
  return str;
}

export function addCommonTags(scope: Construct, tags: CfnTag[]) {
  tags.forEach((tag) => {
    Tags.of(scope).add(tag.key, tag.value, {
      /**
       * Never auto-tag EKS Nodegroups. Updates to EKS Nodegroups that happen in
       * the same CFN update as the LaunchTemplate that they point to will
       * always fail.
       *
       * https://lightrun.com/answers/aws-aws-cdk-aws-eks-tag-update-in-eks-based-stack-triggers-version-and-releaseversion-updates-cannot-be-comb
       *
       * Instead, EKS NodeGroups need to be treated specially. We tag the EC2
       * instances directly through the LaunchTemplate, so that we are never
       * updating the NodeGroup and LaunchTemplate at the same time.
       */
      excludeResourceTypes: ['AWS::EKS::Nodegroup']
    });
  });
}
