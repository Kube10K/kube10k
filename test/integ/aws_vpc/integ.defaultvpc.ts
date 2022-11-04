import { IntegTest } from "@aws-cdk/integ-tests-alpha";
import { App, DefaultStackSynthesizer, Stack } from "aws-cdk-lib";
import { NestedVpcStack } from "../../../src/aws_vpc/stacks";

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
new NestedVpcStack(stack, "vpc", {});

new IntegTest(app, "IntegTest", {
  testCases: [stack],
});
