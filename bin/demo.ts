import { App, Stack } from "aws-cdk-lib";
import { NestedCoreVpcStack } from "../src/aws/vpc/stacks";

const app = new App();
const rootStack = new Stack(app, "RootStack", {});
new NestedCoreVpcStack(rootStack, "Vpc", {});
