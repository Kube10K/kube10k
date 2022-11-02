/**
 * Prefix used whenever {@link addInternallabel} is called
 */
const NODE_LABEL_PREFIX: string = 'kube10k';

/**
 * Prefix used if `internal=true` is passed to the {@link NodeTaint} constructor
 */
const NODE_TAINT_PREFIX: string = 'kube10k';

export interface NodeLabel {
  readonly key: string;
  readonly value: string;
}

export class NodeLabels {
  readonly labels: NodeLabel[];

  constructor() {
    this.labels = [];
  }

  labelsAsMap(): { [id: string]: string } {
    let retMap: { [id: string]: string } = {};
    this.labels.forEach((element) => {
      retMap[element.key] = element.value;
    });
    return retMap;
  }

  addLabel(key: string, value: string) {
    this.labels.push({ key: key, value: value });
  }

  addInternalLabel(subKey: string, value: string) {
    this.addLabel(`${NODE_LABEL_PREFIX}/${subKey}`, value);
  }
}

/**
 * Custom class for defining Taints and then populating Tolerations,
 * BottleRocket Taint configs, etc.
 */

export enum TaintedNodeEffect {
  NO_SCHEDULE = 'NoSchedule',
  NO_EXECUTE = 'NoExecute',
  PREFER_NO_SCHEDULE = 'PreferNoSchedule'
}

export class NodeTaint {
  readonly value: string;
  readonly key: string;
  readonly effect: TaintedNodeEffect;

  constructor(
    key: string,
    value: string,
    effect: TaintedNodeEffect = TaintedNodeEffect.NO_SCHEDULE,
    internal: boolean = false
  ) {
    if (internal) {
      this.key = `${NODE_TAINT_PREFIX}/${key}`;
    } else {
      this.key = key;
    }
    this.value = value;
    this.effect = effect;
  }

  nodeSelector(): { [id: string]: string } {
    let m: { [id: string]: string } = {};
    m[this.key] = this.value;
    return m;
  }

  getPreferredNodeAffeinity(weight: number = 1): { [id: string]: any } {
    return {
      weight: weight,
      preference: {
        matchExpressions: [
          {
            key: this.key,
            operator: 'In',
            values: [this.value]
          }
        ]
      }
    };
  }

  toleration(): { [id: string]: string } {
    return {
      key: this.key,
      value: this.value,
      effect: this.effect,
      operator: 'Equal'
    };
  }
}
