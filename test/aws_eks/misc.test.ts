import { NodeTaint, TaintedNodeEffect } from "../../src/aws_eks/misc";

describe("Common", () => {
  test("NodeTaint", () => {
    // GIVEN
    const taint = new NodeTaint(
      "testKey",
      "testValue",
      TaintedNodeEffect.NO_EXECUTE
    );

    // ASSERT: Toleration is returned properly
    expect(taint.toleration()).toEqual({
      key: "testKey",
      value: "testValue",
      effect: "NoExecute",
      operator: "Equal",
    });

    // ASSERT: NodeSelector is returned properly
    expect(taint.nodeSelector()).toEqual({
      testKey: "testValue",
    });
  });
});
