import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Cluster, KubernetesVersion } from "aws-cdk-lib/aws-eks";
import { OidcIrsa } from "../../src/aws_eks";

describe("OidcIrsa", () => {
  test("Custom OpenID Provider", () => {
    const app = new App();
    const stack = new Stack(app, "TestStack");
    const testCluster = new Cluster(stack, "TestCluster", {
      version: KubernetesVersion.V1_21,
    });
    new OidcIrsa(stack, "OidcIrsa", {
      cluster: testCluster,
    });
    const template = Template.fromStack(stack);

    // ASSERT: LambdaLayer and Lambda Function created
    template.resourceCountIs("AWS::Lambda::LayerVersion", 1);
    template.resourceCountIs("AWS::Lambda::Function", 1);

    // ASSERT: Lambda Thumbprint Function calld
    template.resourceCountIs("Custom::Thumbprint", 1);

    // ASSERT: OpenIdConnectProvider
    template.resourceCountIs("AWS::IAM::OIDCProvider", 1);
  });
});
