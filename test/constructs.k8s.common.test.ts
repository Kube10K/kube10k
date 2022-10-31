import { NodeTaint, TaintedNodeEffect } from '../src/constructs/k8s/common';
describe('Common', () => {
  test('NodeTaint', () => {
    // GIVEN
    const taint = new NodeTaint('testKey', 'testValue', TaintedNodeEffect.NO_EXECUTE);

    // ASSERT: Toleration is returned properly
    expect(taint.getToleration()).toEqual({
      key: 'testKey',
      value: 'testValue',
      effect: 'NoExecute',
      operator: 'Equal',
    });

    // ASSERT: NodeSelector is returned properly
    expect(taint.getNodeSelector()).toEqual({
      testKey: 'testValue',
    });
  });
});
