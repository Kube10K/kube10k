/** @format */

import { Stack } from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import { CoreVpc } from "../../../src/aws/vpc";

describe("Vpc", () => {
  test("Create Default VPC", () => {
    // GIVEN
    const stack = new Stack();
    new CoreVpc(stack, "TestVpc", {
      name: "foo",
      maxAZs: 2,
      cidr: "10.0.0.0/16",
    });

    // COMPILE
    const template = Template.fromStack(stack);

    // ASSERT: 1 VPC created
    template.resourceCountIs("AWS::EC2::VPC", 1);

    // ASSERT: 2 public, 2 private
    template.resourceCountIs("AWS::EC2::Subnet", 4);

    // ASSERT: 2 Private Subnets created with the expected CIDR
    template.hasResource("AWS::EC2::Subnet", {
      Properties: {
        CidrBlock: "10.0.0.0/20",
        Tags: Match.arrayWith([
          { Key: "Name", Value: "Default/TestVpc/Vpc/PrivateSubnet1" },
        ]),
      },
    });
    template.hasResource("AWS::EC2::Subnet", {
      Properties: {
        CidrBlock: "10.0.16.0/20",
        Tags: Match.arrayWith([
          { Key: "Name", Value: "Default/TestVpc/Vpc/PrivateSubnet2" },
        ]),
      },
    });

    // ASSERT: 2 Public Subnets cretaed with the expected CIDR
    template.hasResource("AWS::EC2::Subnet", {
      Properties: {
        CidrBlock: "10.0.32.0/24",
        Tags: Match.arrayWith([
          { Key: "Name", Value: "Default/TestVpc/Vpc/PublicSubnet1" },
        ]),
      },
    });
    template.hasResource("AWS::EC2::Subnet", {
      Properties: {
        CidrBlock: "10.0.33.0/24",
        Tags: Match.arrayWith([
          { Key: "Name", Value: "Default/TestVpc/Vpc/PublicSubnet2" },
        ]),
      },
    });
  });
});
