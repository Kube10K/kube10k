import { App, CfnTag, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { KubernetesVersion } from "aws-cdk-lib/aws-eks";
import { CfnRole } from "aws-cdk-lib/aws-iam";
import { CfnKey } from "aws-cdk-lib/aws-kms";
import {
  ClusterRoles,
  ClusterSecurityGroups,
  DEFAULT_SERVICE_IPV4_CIDR,
  getKubeProxyConfig,
  getTagsAsMap,
  Kube10kCluster,
} from "../../src/aws_eks";

describe("ClusterFunctions", () => {
  test("Func: getKubeProxyConfig", () => {
    // GIVEN
    const configMap = getKubeProxyConfig("ipvs", "rr");
    const data = configMap.data;
    const configStr: string = data.config;

    // ASSERT
    expect(configStr.match(/mode: ipvs'/)).toBeDefined();
    expect(configStr.match(/scheduler: rr'/)).toBeDefined();
  });

  test("Func: getTagsAsMap", () => {
    // GIVEN
    const cfnTags: CfnTag[] = [
      { key: "foo", value: "bar" },
      { key: "foo2", value: "bar2" },
    ];

    // THEN
    const tagMap = getTagsAsMap(cfnTags);

    // ASSERT
    expect(tagMap.foo).toEqual("bar");
    expect(tagMap.foo2).toEqual("bar2");

    // GIVEN: Undefined input returns empty map
    expect(getTagsAsMap()).toEqual({});
  });
});

describe("Cluster", () => {
  // Default Test Scenario... makes the tests faster to compile this all once,
  // then we can write individual test descriptions below.
  const app = new App();
  const stack = new Stack(app, "TestStack");
  const vpc = new Vpc(stack, "TestVpc");
  const clusterRoles = new ClusterRoles(stack, "TestRoles");
  const testCluster = new Kube10kCluster(stack, "TestCluster", {
    clusterName: "TestClusterName",
    clusterRoles: clusterRoles,
    clusterSecurityGroups: new ClusterSecurityGroups(stack, "TestPrep", {
      vpc: vpc,
    }),
    kubernetesVersion: KubernetesVersion.V1_21,
    optionalKube10kClusterProps: {
      commonTags: [{ key: "Foo", value: "Bar" }],
    },
  });
  const template = Template.fromStack(stack);

  test("KMS Key and Alias", () => {
    // ASSERT: KMS Key Created, and has appropriate Description
    template.resourceCountIs("AWS::KMS::Key", 1);
    template.hasResourceProperties("AWS::KMS::Key", {
      Description: "TestStack",
    });

    // ASSERT: KMS Alias created and has appropriate name
    template.hasResourceProperties("AWS::KMS::Alias", {
      AliasName: "alias/TestClusterName",
    });
  });

  test("Custom Lambda Layer", () => {
    // ASSERT: Kubectl Layer was created
    template.resourceCountIs("AWS::Lambda::LayerVersion", 1);
  });

  test("Custom EKS Cluster Created", () => {
    template.hasResourceProperties("Custom::AWSCDK-EKS-Cluster", {
      Config: {
        // ASSERT: KubernetesVersion property is respected
        version: "1.21",

        // ASSERT: ClusterName property is respected
        name: "TestClusterName",

        // ASSERT: KmsKey is passed into the EKS Cluster
        encryptionConfig: [
          {
            provider: {
              keyArn: {
                "Fn::GetAtt": [
                  stack.getLogicalId(
                    testCluster.kmsKey.node.defaultChild as CfnKey
                  ),
                  "Arn",
                ],
              },
            },
          },
        ],
        // ASSERT: ServiceIpv4Cidr is respected
        kubernetesNetworkConfig: {
          serviceIpv4Cidr: DEFAULT_SERVICE_IPV4_CIDR,
        },

        // ASSERT: The Cluster Control Plane role we provided is the one
        // actually used in the final resource
        roleArn: {
          "Fn::GetAtt": [
            stack.getLogicalId(
              clusterRoles.clusterRole.node.defaultChild as CfnRole
            ),
            "Arn",
          ],
        },

        // ASSERT: That the tags we passed in are set on the final custom resource
        tags: {
          Foo: "Bar",
        },
      },
    });
  });
});
