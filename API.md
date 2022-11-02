# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### HelmChartOverrides <a name="HelmChartOverrides" id="kube10k.common.HelmChartOverrides"></a>

#### Initializer <a name="Initializer" id="kube10k.common.HelmChartOverrides.Initializer"></a>

```typescript
import { common } from 'kube10k'

const helmChartOverrides: common.HelmChartOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.common.HelmChartOverrides.property.chart">chart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.common.HelmChartOverrides.property.releaseName">releaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.common.HelmChartOverrides.property.repository">repository</a></code> | <code>string</code> | Helm Chart Settings - Defaults are above. |
| <code><a href="#kube10k.common.HelmChartOverrides.property.values">values</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#kube10k.common.HelmChartOverrides.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `chart`<sup>Optional</sup> <a name="chart" id="kube10k.common.HelmChartOverrides.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* string

---

##### `releaseName`<sup>Optional</sup> <a name="releaseName" id="kube10k.common.HelmChartOverrides.property.releaseName"></a>

```typescript
public readonly releaseName: string;
```

- *Type:* string

---

##### `repository`<sup>Optional</sup> <a name="repository" id="kube10k.common.HelmChartOverrides.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Helm Chart Settings - Defaults are above.

---

##### `values`<sup>Optional</sup> <a name="values" id="kube10k.common.HelmChartOverrides.property.values"></a>

```typescript
public readonly values: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `version`<sup>Optional</sup> <a name="version" id="kube10k.common.HelmChartOverrides.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---



