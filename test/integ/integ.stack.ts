import { IntegTest } from "@aws-cdk/integ-tests-alpha";
import { App, DefaultStackSynthesizer, Stack } from "aws-cdk-lib";
import { NestedVpcStack } from "../../src/aws_vpc/stacks";
import { ClusterStack } from "../../src/stacks";

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

/**
 * The integ-test runner by default really only understands how to run one-test. The tests take a long time anyways, so
 * we choose to only develop one test right now - this one.
 *
 * In the future if we have a dedicated AWS account for testing, we may choose to build out a more elaborate integration
 * test framework.
 */
const app = new App();

// Create the parent stack that we'll put our various components/nested stacks into.
const rootStack = new Stack(app, "integ-test", {
  env: env,
  synthesizer: new DefaultStackSynthesizer({
    qualifier: "default",
  }),
});

// Create a VPC for the cluster
const vpcStack = new NestedVpcStack(rootStack, "vpc", {});

// Put the Cluster into the VPC Stack. It's just easier that way.
new ClusterStack(rootStack, "cluster", {
  clusterName: "test",
  vpc: vpcStack.vpc,
  kubernetesVersion: "1.23",
});

// https://docs.aws.amazon.com/cdk/api/v2/docs/integ-tests-alpha-readme.html#assertions
const assertionStack = new Stack(app, "assertions", {
  env: env,
  synthesizer: new DefaultStackSynthesizer({
    qualifier: "default",
  }),
});

// Just verify the stack is launchable
new IntegTest(app, "IntegTest", {
  testCases: [rootStack],
  assertionStack: assertionStack,
});
