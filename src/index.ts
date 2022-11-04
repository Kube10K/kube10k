import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

/**
 * @module kube10k
 */
// export * as aws from "./aws";

export interface Foo {
  bar: string;
}
export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    // define resources here...
  }
}
