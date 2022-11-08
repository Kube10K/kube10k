import { App, NestedStack, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Cluster, KubernetesVersion } from "aws-cdk-lib/aws-eks";
import { WorkloadSubnets } from "../../src/aws_vpc";

describe("WorkloadSubnets", () => {
  test("Default", () => {
    // GIVEN
    const app = new App();
    const rootStack = new Stack(app, "RootStack");
    const testCluster = new Cluster(rootStack, "TestCluster", {
      version: KubernetesVersion.V1_21,
    });
    const stack = new NestedStack(rootStack, "TestStack");
    new WorkloadSubnets(stack, "WorkloadSubnets", {
      vpc: testCluster.vpc,
      cluster: testCluster,
    });

    // THEN
    const template = Template.fromStack(stack);

    // ASSERT: The CIDR Block is created
    template.hasResourceProperties("AWS::EC2::VPCCidrBlock", {
      CidrBlock: "100.65.0.0/16",
    });

    // ASSERT: Subnets for each AZ were created
    template.hasResourceProperties("AWS::EC2::Subnet", {
      AvailabilityZone: { "Fn::Select": [0, { "Fn::GetAZs": "" }] },
      CidrBlock: {
        "Fn::Select": [0, { "Fn::Cidr": ["100.65.0.0/16", 2, "14"] }],
      },
    });
    template.hasResourceProperties("AWS::EC2::Subnet", {
      AvailabilityZone: { "Fn::Select": [1, { "Fn::GetAZs": "" }] },
      CidrBlock: {
        "Fn::Select": [1, { "Fn::Cidr": ["100.65.0.0/16", 2, "14"] }],
      },
    });

    // ASSERT: SubnetRouteTableAssociation for each AZ were created
    template.resourceCountIs("AWS::EC2::SubnetRouteTableAssociation", 2);
  });
});
