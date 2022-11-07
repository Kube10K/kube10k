import { IntegTest } from "@aws-cdk/integ-tests-alpha";
import { App, DefaultStackSynthesizer, Stack } from "aws-cdk-lib";
import { ClusterRoles } from "../../../src/aws_eks/roles";

const env = {
  region:
    process.env.CDK_INTEG_REGION ||
    process.env.CDK_DEFAULT_REGION ||
    process.env.AWS_DEFAULT_REGION,
  account:
    process.env.CDK_INTEG_ACCOUNT ||
    process.env.CDK_DEFAULT_ACCOUNT ||
    process.env.AWS_DEFAULT_ACCOUNT,
};

const app = new App();
const stack = new Stack(app, "root", {
  env: env,
  synthesizer: new DefaultStackSynthesizer({
    qualifier: "default",
  }),
});

// Put the Roles into the Stack
new ClusterRoles(stack, "roles", {});

// https://docs.aws.amazon.com/cdk/api/v2/docs/integ-tests-alpha-readme.html#assertions
const assertionStack = new Stack(app, "assertions", {
  env: env,
  synthesizer: new DefaultStackSynthesizer({
    qualifier: "default",
  }),
});

// Just verify the stack is launchable
new IntegTest(app, "IntegTest", {
  testCases: [stack],
  assertionStack: assertionStack,
});
