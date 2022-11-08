# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClusterRoles <a name="ClusterRoles" id="kube10k.aws_eks.ClusterRoles"></a>

#### Initializers <a name="Initializers" id="kube10k.aws_eks.ClusterRoles.Initializer"></a>

```typescript
import { aws_eks } from 'kube10k'

new aws_eks.ClusterRoles(scope: Stack, id: string, props?: ClusterRolesProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.ClusterRoles.Initializer.parameter.scope">scope</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.ClusterRoles.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.ClusterRoles.Initializer.parameter.props">props</a></code> | <code>kube10k.aws_eks.ClusterRolesProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.aws_eks.ClusterRoles.Initializer.parameter.scope"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.aws_eks.ClusterRoles.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="kube10k.aws_eks.ClusterRoles.Initializer.parameter.props"></a>

- *Type:* kube10k.aws_eks.ClusterRolesProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_eks.ClusterRoles.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="kube10k.aws_eks.ClusterRoles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_eks.ClusterRoles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.aws_eks.ClusterRoles.isConstruct"></a>

```typescript
import { aws_eks } from 'kube10k'

aws_eks.ClusterRoles.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.aws_eks.ClusterRoles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.ClusterRoles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.aws_eks.ClusterRoles.property.clusterRole">clusterRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Provides access to the Cluster Control Plane role that the cluster will use. |
| <code><a href="#kube10k.aws_eks.ClusterRoles.property.masterRole">masterRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Provides access to the Master Role that will be granted privileges into the final Kubernetes cluster that is created. |
| <code><a href="#kube10k.aws_eks.ClusterRoles.property.nodeRole">nodeRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Provides access to the Node Role that should be assigned to EC2 nodes that join the cluster. |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.aws_eks.ClusterRoles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `clusterRole`<sup>Required</sup> <a name="clusterRole" id="kube10k.aws_eks.ClusterRoles.property.clusterRole"></a>

```typescript
public readonly clusterRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Provides access to the Cluster Control Plane role that the cluster will use.

---

##### `masterRole`<sup>Required</sup> <a name="masterRole" id="kube10k.aws_eks.ClusterRoles.property.masterRole"></a>

```typescript
public readonly masterRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Provides access to the Master Role that will be granted privileges into the final Kubernetes cluster that is created.

---

##### `nodeRole`<sup>Required</sup> <a name="nodeRole" id="kube10k.aws_eks.ClusterRoles.property.nodeRole"></a>

```typescript
public readonly nodeRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Provides access to the Node Role that should be assigned to EC2 nodes that join the cluster.

---


### ClusterSecurityGroups <a name="ClusterSecurityGroups" id="kube10k.aws_eks.ClusterSecurityGroups"></a>

#### Initializers <a name="Initializers" id="kube10k.aws_eks.ClusterSecurityGroups.Initializer"></a>

```typescript
import { aws_eks } from 'kube10k'

new aws_eks.ClusterSecurityGroups(scope: Stack, id: string, props: ClusterNetworkProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.ClusterSecurityGroups.Initializer.parameter.scope">scope</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.ClusterSecurityGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.ClusterSecurityGroups.Initializer.parameter.props">props</a></code> | <code>kube10k.aws_eks.ClusterNetworkProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.aws_eks.ClusterSecurityGroups.Initializer.parameter.scope"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.aws_eks.ClusterSecurityGroups.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="kube10k.aws_eks.ClusterSecurityGroups.Initializer.parameter.props"></a>

- *Type:* kube10k.aws_eks.ClusterNetworkProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_eks.ClusterSecurityGroups.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="kube10k.aws_eks.ClusterSecurityGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_eks.ClusterSecurityGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.aws_eks.ClusterSecurityGroups.isConstruct"></a>

```typescript
import { aws_eks } from 'kube10k'

aws_eks.ClusterSecurityGroups.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.aws_eks.ClusterSecurityGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.ClusterSecurityGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.aws_eks.ClusterSecurityGroups.property.controlPlaneSecurityGroup">controlPlaneSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | Access to the Control Plane {@link ISecurityGroup} resource. |
| <code><a href="#kube10k.aws_eks.ClusterSecurityGroups.property.nodeSecurityGroup">nodeSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | Access to the Node {@link ISecurityGroup} resource. |
| <code><a href="#kube10k.aws_eks.ClusterSecurityGroups.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | Access to the {@link IVpc} in which the {@link SecurityGroup} resources were created. |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.aws_eks.ClusterSecurityGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `controlPlaneSecurityGroup`<sup>Required</sup> <a name="controlPlaneSecurityGroup" id="kube10k.aws_eks.ClusterSecurityGroups.property.controlPlaneSecurityGroup"></a>

```typescript
public readonly controlPlaneSecurityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

Access to the Control Plane {@link ISecurityGroup} resource.

---

##### `nodeSecurityGroup`<sup>Required</sup> <a name="nodeSecurityGroup" id="kube10k.aws_eks.ClusterSecurityGroups.property.nodeSecurityGroup"></a>

```typescript
public readonly nodeSecurityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

Access to the Node {@link ISecurityGroup} resource.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="kube10k.aws_eks.ClusterSecurityGroups.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

Access to the {@link IVpc} in which the {@link SecurityGroup} resources were created.

---


### ClusterStack <a name="ClusterStack" id="kube10k.stacks.ClusterStack"></a>

#### Initializers <a name="Initializers" id="kube10k.stacks.ClusterStack.Initializer"></a>

```typescript
import { stacks } from 'kube10k'

new stacks.ClusterStack(scope: Construct, id: string, props: ClusterStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.ClusterStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#kube10k.stacks.ClusterStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.stacks.ClusterStack.Initializer.parameter.props">props</a></code> | <code>kube10k.stacks.ClusterStackProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.stacks.ClusterStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.stacks.ClusterStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="kube10k.stacks.ClusterStack.Initializer.parameter.props"></a>

- *Type:* kube10k.stacks.ClusterStackProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.stacks.ClusterStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#kube10k.stacks.ClusterStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#kube10k.stacks.ClusterStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#kube10k.stacks.ClusterStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#kube10k.stacks.ClusterStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a value. |
| <code><a href="#kube10k.stacks.ClusterStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#kube10k.stacks.ClusterStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#kube10k.stacks.ClusterStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#kube10k.stacks.ClusterStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#kube10k.stacks.ClusterStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#kube10k.stacks.ClusterStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#kube10k.stacks.ClusterStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#kube10k.stacks.ClusterStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#kube10k.stacks.ClusterStack.setParameter">setParameter</a></code> | Assign a value to one of the nested stack parameters. |

---

##### `toString` <a name="toString" id="kube10k.stacks.ClusterStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="kube10k.stacks.ClusterStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="kube10k.stacks.ClusterStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="kube10k.stacks.ClusterStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="kube10k.stacks.ClusterStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="kube10k.stacks.ClusterStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.stacks.ClusterStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="kube10k.stacks.ClusterStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="kube10k.stacks.ClusterStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportValue` <a name="exportValue" id="kube10k.stacks.ClusterStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
   stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
   remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
   will make sure the CloudFormation Export continues to exist while the relationship
   between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="kube10k.stacks.ClusterStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="kube10k.stacks.ClusterStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="kube10k.stacks.ClusterStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

   arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="kube10k.stacks.ClusterStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="kube10k.stacks.ClusterStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="kube10k.stacks.ClusterStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="kube10k.stacks.ClusterStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="kube10k.stacks.ClusterStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="kube10k.stacks.ClusterStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="kube10k.stacks.ClusterStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="kube10k.stacks.ClusterStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="kube10k.stacks.ClusterStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="kube10k.stacks.ClusterStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="kube10k.stacks.ClusterStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="kube10k.stacks.ClusterStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.stacks.ClusterStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="kube10k.stacks.ClusterStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="kube10k.stacks.ClusterStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="kube10k.stacks.ClusterStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="kube10k.stacks.ClusterStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.stacks.ClusterStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="kube10k.stacks.ClusterStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `setParameter` <a name="setParameter" id="kube10k.stacks.ClusterStack.setParameter"></a>

```typescript
public setParameter(name: string, value: string): void
```

Assign a value to one of the nested stack parameters.

###### `name`<sup>Required</sup> <a name="name" id="kube10k.stacks.ClusterStack.setParameter.parameter.name"></a>

- *Type:* string

The parameter name (ID).

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.stacks.ClusterStack.setParameter.parameter.value"></a>

- *Type:* string

The value to assign.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.stacks.ClusterStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#kube10k.stacks.ClusterStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#kube10k.stacks.ClusterStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#kube10k.stacks.ClusterStack.isNestedStack">isNestedStack</a></code> | Checks if `x` is an object of type `NestedStack`. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.stacks.ClusterStack.isConstruct"></a>

```typescript
import { stacks } from 'kube10k'

stacks.ClusterStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.ClusterStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="kube10k.stacks.ClusterStack.isStack"></a>

```typescript
import { stacks } from 'kube10k'

stacks.ClusterStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.ClusterStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="kube10k.stacks.ClusterStack.of"></a>

```typescript
import { stacks } from 'kube10k'

stacks.ClusterStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="kube10k.stacks.ClusterStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `isNestedStack` <a name="isNestedStack" id="kube10k.stacks.ClusterStack.isNestedStack"></a>

```typescript
import { stacks } from 'kube10k'

stacks.ClusterStack.isNestedStack(x: any)
```

Checks if `x` is an object of type `NestedStack`.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.ClusterStack.isNestedStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.ClusterStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.stacks.ClusterStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#kube10k.stacks.ClusterStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#kube10k.stacks.ClusterStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#kube10k.stacks.ClusterStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#kube10k.stacks.ClusterStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#kube10k.stacks.ClusterStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#kube10k.stacks.ClusterStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#kube10k.stacks.ClusterStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#kube10k.stacks.ClusterStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#kube10k.stacks.ClusterStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#kube10k.stacks.ClusterStack.property.stackId">stackId</a></code> | <code>string</code> | An attribute that represents the ID of the stack. |
| <code><a href="#kube10k.stacks.ClusterStack.property.stackName">stackName</a></code> | <code>string</code> | An attribute that represents the name of the nested stack. |
| <code><a href="#kube10k.stacks.ClusterStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#kube10k.stacks.ClusterStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#kube10k.stacks.ClusterStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#kube10k.stacks.ClusterStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#kube10k.stacks.ClusterStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#kube10k.stacks.ClusterStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#kube10k.stacks.ClusterStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#kube10k.stacks.ClusterStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#kube10k.stacks.ClusterStack.property.cluster">cluster</a></code> | <code>kube10k.aws_eks.Kube10kCluster</code> | Provides direct access to the {@link Kube10kCluster} resource - the aws-cdk Layer3 construct used to create the cluster itself. |
| <code><a href="#kube10k.stacks.ClusterStack.property.clusterRoles">clusterRoles</a></code> | <code>kube10k.aws_eks.ClusterRoles</code> | Provides access to the {@link ClusterRoles} construct created in this stack for the cluster. |
| <code><a href="#kube10k.stacks.ClusterStack.property.clusterSecurityGroups">clusterSecurityGroups</a></code> | <code>kube10k.aws_eks.ClusterSecurityGroups</code> | Provides access to the {@link ClusterSecurityGroups} construct which contains references to the `NodeSecurityGroup`, `PodSecurityGroup` and `ControlPlaneSecurityGroup`. |
| <code><a href="#kube10k.stacks.ClusterStack.property.oidcIrsa">oidcIrsa</a></code> | <code>kube10k.aws_eks.OidcIrsa</code> | Provides access to the {@link OidcIrsa} construct. |
| <code><a href="#kube10k.stacks.ClusterStack.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which this Cluster was created. |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.stacks.ClusterStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="kube10k.stacks.ClusterStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
    either be a concrete account (e.g. `585695031111`) or the
    `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
    `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="kube10k.stacks.ClusterStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="kube10k.stacks.ClusterStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="kube10k.stacks.ClusterStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="kube10k.stacks.ClusterStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="kube10k.stacks.ClusterStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="kube10k.stacks.ClusterStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="kube10k.stacks.ClusterStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="kube10k.stacks.ClusterStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="kube10k.stacks.ClusterStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
    either be a concerete region (e.g. `us-west-2`) or the `Aws.REGION`
    token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
    `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="kube10k.stacks.ClusterStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

An attribute that represents the ID of the stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return `{ "Ref": "LogicalIdOfNestedStackResource" }`.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackId" }`

Example value: `arn:aws:cloudformation:us-east-2:123456789012:stack/mystack-mynestedstack-sggfrhxhum7w/f449b250-b969-11e0-a185-5081d0136786`

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="kube10k.stacks.ClusterStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

An attribute that represents the name of the nested stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return a token that parses the name from the stack ID.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackName" }`

Example value: `mystack-mynestedstack-sggfrhxhum7w`

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="kube10k.stacks.ClusterStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="kube10k.stacks.ClusterStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="kube10k.stacks.ClusterStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="kube10k.stacks.ClusterStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="kube10k.stacks.ClusterStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="kube10k.stacks.ClusterStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="kube10k.stacks.ClusterStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="kube10k.stacks.ClusterStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="kube10k.stacks.ClusterStack.property.cluster"></a>

```typescript
public readonly cluster: Kube10kCluster;
```

- *Type:* kube10k.aws_eks.Kube10kCluster

Provides direct access to the {@link Kube10kCluster} resource - the aws-cdk Layer3 construct used to create the cluster itself.

---

##### `clusterRoles`<sup>Required</sup> <a name="clusterRoles" id="kube10k.stacks.ClusterStack.property.clusterRoles"></a>

```typescript
public readonly clusterRoles: ClusterRoles;
```

- *Type:* kube10k.aws_eks.ClusterRoles

Provides access to the {@link ClusterRoles} construct created in this stack for the cluster.

Used to get access to the `NodeRole` mostly.

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="clusterSecurityGroups" id="kube10k.stacks.ClusterStack.property.clusterSecurityGroups"></a>

```typescript
public readonly clusterSecurityGroups: ClusterSecurityGroups;
```

- *Type:* kube10k.aws_eks.ClusterSecurityGroups

Provides access to the {@link ClusterSecurityGroups} construct which contains references to the `NodeSecurityGroup`, `PodSecurityGroup` and `ControlPlaneSecurityGroup`.

---

##### `oidcIrsa`<sup>Required</sup> <a name="oidcIrsa" id="kube10k.stacks.ClusterStack.property.oidcIrsa"></a>

```typescript
public readonly oidcIrsa: OidcIrsa;
```

- *Type:* kube10k.aws_eks.OidcIrsa

Provides access to the {@link OidcIrsa} construct.

This construct is used
to help create TrustPolicy documents for {@link Role} resources which are
used by `ServiceAccounts` within the cluster.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="kube10k.stacks.ClusterStack.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC in which this Cluster was created.

---


### DefaultVpc <a name="DefaultVpc" id="kube10k.aws_vpc.DefaultVpc"></a>

#### Initializers <a name="Initializers" id="kube10k.aws_vpc.DefaultVpc.Initializer"></a>

```typescript
import { aws_vpc } from 'kube10k'

new aws_vpc.DefaultVpc(scope: Construct, id: string, props?: DefaultVpcProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_vpc.DefaultVpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#kube10k.aws_vpc.DefaultVpc.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.aws_vpc.DefaultVpc.Initializer.parameter.props">props</a></code> | <code>kube10k.aws_vpc.DefaultVpcProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.aws_vpc.DefaultVpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.aws_vpc.DefaultVpc.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="kube10k.aws_vpc.DefaultVpc.Initializer.parameter.props"></a>

- *Type:* kube10k.aws_vpc.DefaultVpcProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_vpc.DefaultVpc.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="kube10k.aws_vpc.DefaultVpc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_vpc.DefaultVpc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.aws_vpc.DefaultVpc.isConstruct"></a>

```typescript
import { aws_vpc } from 'kube10k'

aws_vpc.DefaultVpc.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.aws_vpc.DefaultVpc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_vpc.DefaultVpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.aws_vpc.DefaultVpc.property.resource">resource</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.aws_vpc.DefaultVpc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `resource`<sup>Required</sup> <a name="resource" id="kube10k.aws_vpc.DefaultVpc.property.resource"></a>

```typescript
public readonly resource: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---


### Kube10kCluster <a name="Kube10kCluster" id="kube10k.aws_eks.Kube10kCluster"></a>

#### Initializers <a name="Initializers" id="kube10k.aws_eks.Kube10kCluster.Initializer"></a>

```typescript
import { aws_eks } from 'kube10k'

new aws_eks.Kube10kCluster(scope: Stack, id: string, props: Kube10kClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.Kube10kCluster.Initializer.parameter.scope">scope</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.Kube10kCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.Kube10kCluster.Initializer.parameter.props">props</a></code> | <code>kube10k.aws_eks.Kube10kClusterProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.aws_eks.Kube10kCluster.Initializer.parameter.scope"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.aws_eks.Kube10kCluster.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="kube10k.aws_eks.Kube10kCluster.Initializer.parameter.props"></a>

- *Type:* kube10k.aws_eks.Kube10kClusterProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_eks.Kube10kCluster.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="kube10k.aws_eks.Kube10kCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_eks.Kube10kCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.aws_eks.Kube10kCluster.isConstruct"></a>

```typescript
import { aws_eks } from 'kube10k'

aws_eks.Kube10kCluster.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.aws_eks.Kube10kCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.Kube10kCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.aws_eks.Kube10kCluster.property.awsAuth">awsAuth</a></code> | <code>aws-cdk-lib.aws_eks.AwsAuth</code> | Provides access to the AwsAuth function for customizing the authentication into the cluster. |
| <code><a href="#kube10k.aws_eks.Kube10kCluster.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.Cluster</code> | Provides access to the underlying Cluster object. |
| <code><a href="#kube10k.aws_eks.Kube10kCluster.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Provide access to the {@link Key} Key that is used by the cluster for storing secrets. |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.aws_eks.Kube10kCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `awsAuth`<sup>Required</sup> <a name="awsAuth" id="kube10k.aws_eks.Kube10kCluster.property.awsAuth"></a>

```typescript
public readonly awsAuth: AwsAuth;
```

- *Type:* aws-cdk-lib.aws_eks.AwsAuth

Provides access to the AwsAuth function for customizing the authentication into the cluster.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="kube10k.aws_eks.Kube10kCluster.property.cluster"></a>

```typescript
public readonly cluster: Cluster;
```

- *Type:* aws-cdk-lib.aws_eks.Cluster

Provides access to the underlying Cluster object.

Note: We pass back the full Cluster object, not the ICluster interface. The
{@link Kube10kCluster} object provides access to the important
`clusterOpenIdConnectIssuerUrl` property.

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="kube10k.aws_eks.Kube10kCluster.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

Provide access to the {@link Key} Key that is used by the cluster for storing secrets.

This Key can also be used later for in-cluster resources like the
KMS Secret Controller.

---


### NestedVpcStack <a name="NestedVpcStack" id="kube10k.aws_vpc.NestedVpcStack"></a>

#### Initializers <a name="Initializers" id="kube10k.aws_vpc.NestedVpcStack.Initializer"></a>

```typescript
import { aws_vpc } from 'kube10k'

new aws_vpc.NestedVpcStack(scope: Construct, id: string, props?: VpcStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.Initializer.parameter.props">props</a></code> | <code>kube10k.aws_vpc.VpcStackProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.aws_vpc.NestedVpcStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.aws_vpc.NestedVpcStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="kube10k.aws_vpc.NestedVpcStack.Initializer.parameter.props"></a>

- *Type:* kube10k.aws_vpc.VpcStackProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a value. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.setParameter">setParameter</a></code> | Assign a value to one of the nested stack parameters. |

---

##### `toString` <a name="toString" id="kube10k.aws_vpc.NestedVpcStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="kube10k.aws_vpc.NestedVpcStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="kube10k.aws_vpc.NestedVpcStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="kube10k.aws_vpc.NestedVpcStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="kube10k.aws_vpc.NestedVpcStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="kube10k.aws_vpc.NestedVpcStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.aws_vpc.NestedVpcStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="kube10k.aws_vpc.NestedVpcStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="kube10k.aws_vpc.NestedVpcStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportValue` <a name="exportValue" id="kube10k.aws_vpc.NestedVpcStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
   stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
   remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
   will make sure the CloudFormation Export continues to exist while the relationship
   between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="kube10k.aws_vpc.NestedVpcStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="kube10k.aws_vpc.NestedVpcStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="kube10k.aws_vpc.NestedVpcStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

   arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="kube10k.aws_vpc.NestedVpcStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="kube10k.aws_vpc.NestedVpcStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="kube10k.aws_vpc.NestedVpcStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="kube10k.aws_vpc.NestedVpcStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="kube10k.aws_vpc.NestedVpcStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="kube10k.aws_vpc.NestedVpcStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="kube10k.aws_vpc.NestedVpcStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="kube10k.aws_vpc.NestedVpcStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="kube10k.aws_vpc.NestedVpcStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="kube10k.aws_vpc.NestedVpcStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="kube10k.aws_vpc.NestedVpcStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="kube10k.aws_vpc.NestedVpcStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.aws_vpc.NestedVpcStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="kube10k.aws_vpc.NestedVpcStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="kube10k.aws_vpc.NestedVpcStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="kube10k.aws_vpc.NestedVpcStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="kube10k.aws_vpc.NestedVpcStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.aws_vpc.NestedVpcStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="kube10k.aws_vpc.NestedVpcStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `setParameter` <a name="setParameter" id="kube10k.aws_vpc.NestedVpcStack.setParameter"></a>

```typescript
public setParameter(name: string, value: string): void
```

Assign a value to one of the nested stack parameters.

###### `name`<sup>Required</sup> <a name="name" id="kube10k.aws_vpc.NestedVpcStack.setParameter.parameter.name"></a>

- *Type:* string

The parameter name (ID).

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.aws_vpc.NestedVpcStack.setParameter.parameter.value"></a>

- *Type:* string

The value to assign.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.isNestedStack">isNestedStack</a></code> | Checks if `x` is an object of type `NestedStack`. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.aws_vpc.NestedVpcStack.isConstruct"></a>

```typescript
import { aws_vpc } from 'kube10k'

aws_vpc.NestedVpcStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.aws_vpc.NestedVpcStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="kube10k.aws_vpc.NestedVpcStack.isStack"></a>

```typescript
import { aws_vpc } from 'kube10k'

aws_vpc.NestedVpcStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.aws_vpc.NestedVpcStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="kube10k.aws_vpc.NestedVpcStack.of"></a>

```typescript
import { aws_vpc } from 'kube10k'

aws_vpc.NestedVpcStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="kube10k.aws_vpc.NestedVpcStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `isNestedStack` <a name="isNestedStack" id="kube10k.aws_vpc.NestedVpcStack.isNestedStack"></a>

```typescript
import { aws_vpc } from 'kube10k'

aws_vpc.NestedVpcStack.isNestedStack(x: any)
```

Checks if `x` is an object of type `NestedStack`.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.aws_vpc.NestedVpcStack.isNestedStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.stackId">stackId</a></code> | <code>string</code> | An attribute that represents the ID of the stack. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.stackName">stackName</a></code> | <code>string</code> | An attribute that represents the name of the nested stack. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#kube10k.aws_vpc.NestedVpcStack.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which this Cluster was created. |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.aws_vpc.NestedVpcStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="kube10k.aws_vpc.NestedVpcStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
    either be a concrete account (e.g. `585695031111`) or the
    `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
    `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="kube10k.aws_vpc.NestedVpcStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="kube10k.aws_vpc.NestedVpcStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="kube10k.aws_vpc.NestedVpcStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="kube10k.aws_vpc.NestedVpcStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="kube10k.aws_vpc.NestedVpcStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="kube10k.aws_vpc.NestedVpcStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="kube10k.aws_vpc.NestedVpcStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="kube10k.aws_vpc.NestedVpcStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="kube10k.aws_vpc.NestedVpcStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
    either be a concerete region (e.g. `us-west-2`) or the `Aws.REGION`
    token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
    `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="kube10k.aws_vpc.NestedVpcStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

An attribute that represents the ID of the stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return `{ "Ref": "LogicalIdOfNestedStackResource" }`.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackId" }`

Example value: `arn:aws:cloudformation:us-east-2:123456789012:stack/mystack-mynestedstack-sggfrhxhum7w/f449b250-b969-11e0-a185-5081d0136786`

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="kube10k.aws_vpc.NestedVpcStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

An attribute that represents the name of the nested stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return a token that parses the name from the stack ID.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackName" }`

Example value: `mystack-mynestedstack-sggfrhxhum7w`

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="kube10k.aws_vpc.NestedVpcStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="kube10k.aws_vpc.NestedVpcStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="kube10k.aws_vpc.NestedVpcStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="kube10k.aws_vpc.NestedVpcStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="kube10k.aws_vpc.NestedVpcStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="kube10k.aws_vpc.NestedVpcStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="kube10k.aws_vpc.NestedVpcStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="kube10k.aws_vpc.NestedVpcStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="kube10k.aws_vpc.NestedVpcStack.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC in which this Cluster was created.

---


### NestedWorkloadSubnetStack <a name="NestedWorkloadSubnetStack" id="kube10k.aws_vpc.NestedWorkloadSubnetStack"></a>

Wrapper-stack for creating a set of Workload Subnets and associating them with a given VPC object.

These are held in their own nested stack for
organizational purposes primarily.

#### Initializers <a name="Initializers" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.Initializer"></a>

```typescript
import { aws_vpc } from 'kube10k'

new aws_vpc.NestedWorkloadSubnetStack(scope: Stack, id: string, props: WorkloadSubnetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.Initializer.parameter.scope">scope</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.Initializer.parameter.props">props</a></code> | <code>kube10k.aws_vpc.WorkloadSubnetProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.Initializer.parameter.scope"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.Initializer.parameter.props"></a>

- *Type:* kube10k.aws_vpc.WorkloadSubnetProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a value. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.setParameter">setParameter</a></code> | Assign a value to one of the nested stack parameters. |

---

##### `toString` <a name="toString" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportValue` <a name="exportValue" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
   stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
   remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
   will make sure the CloudFormation Export continues to exist while the relationship
   between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

   arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `setParameter` <a name="setParameter" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.setParameter"></a>

```typescript
public setParameter(name: string, value: string): void
```

Assign a value to one of the nested stack parameters.

###### `name`<sup>Required</sup> <a name="name" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.setParameter.parameter.name"></a>

- *Type:* string

The parameter name (ID).

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.setParameter.parameter.value"></a>

- *Type:* string

The value to assign.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.isNestedStack">isNestedStack</a></code> | Checks if `x` is an object of type `NestedStack`. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.isConstruct"></a>

```typescript
import { aws_vpc } from 'kube10k'

aws_vpc.NestedWorkloadSubnetStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.isStack"></a>

```typescript
import { aws_vpc } from 'kube10k'

aws_vpc.NestedWorkloadSubnetStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.of"></a>

```typescript
import { aws_vpc } from 'kube10k'

aws_vpc.NestedWorkloadSubnetStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `isNestedStack` <a name="isNestedStack" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.isNestedStack"></a>

```typescript
import { aws_vpc } from 'kube10k'

aws_vpc.NestedWorkloadSubnetStack.isNestedStack(x: any)
```

Checks if `x` is an object of type `NestedStack`.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.isNestedStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.stackId">stackId</a></code> | <code>string</code> | An attribute that represents the ID of the stack. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.stackName">stackName</a></code> | <code>string</code> | An attribute that represents the name of the nested stack. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#kube10k.aws_vpc.NestedWorkloadSubnetStack.property.workloadSubnets">workloadSubnets</a></code> | <code>kube10k.aws_vpc.WorkloadSubnets</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
    either be a concrete account (e.g. `585695031111`) or the
    `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
    `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
    either be a concerete region (e.g. `us-west-2`) or the `Aws.REGION`
    token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
    `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

An attribute that represents the ID of the stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return `{ "Ref": "LogicalIdOfNestedStackResource" }`.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackId" }`

Example value: `arn:aws:cloudformation:us-east-2:123456789012:stack/mystack-mynestedstack-sggfrhxhum7w/f449b250-b969-11e0-a185-5081d0136786`

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

An attribute that represents the name of the nested stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return a token that parses the name from the stack ID.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackName" }`

Example value: `mystack-mynestedstack-sggfrhxhum7w`

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `workloadSubnets`<sup>Required</sup> <a name="workloadSubnets" id="kube10k.aws_vpc.NestedWorkloadSubnetStack.property.workloadSubnets"></a>

```typescript
public readonly workloadSubnets: WorkloadSubnets;
```

- *Type:* kube10k.aws_vpc.WorkloadSubnets

---


### OidcIrsa <a name="OidcIrsa" id="kube10k.aws_eks.OidcIrsa"></a>

https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html.

This construct implements the OIDC IRSA (IAM Role <-> SerivceAccount) system
for EKS, and provides helper functions that can be used by other constructs
for creating IAM Roles that map to Service Accounts.

#### Initializers <a name="Initializers" id="kube10k.aws_eks.OidcIrsa.Initializer"></a>

```typescript
import { aws_eks } from 'kube10k'

new aws_eks.OidcIrsa(scope: Stack, id: string, props: OidcIrsaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.OidcIrsa.Initializer.parameter.scope">scope</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.OidcIrsa.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.OidcIrsa.Initializer.parameter.props">props</a></code> | <code>kube10k.aws_eks.OidcIrsaProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.aws_eks.OidcIrsa.Initializer.parameter.scope"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.aws_eks.OidcIrsa.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="kube10k.aws_eks.OidcIrsa.Initializer.parameter.props"></a>

- *Type:* kube10k.aws_eks.OidcIrsaProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_eks.OidcIrsa.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#kube10k.aws_eks.OidcIrsa.generateFederatedPolicy">generateFederatedPolicy</a></code> | This function returns back an {@link FederatedPolicy} resource for use in creating an {@link Role} resource that will be used by a Kubernetes `ServiceAccount` to access AWS. |

---

##### `toString` <a name="toString" id="kube10k.aws_eks.OidcIrsa.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `generateFederatedPolicy` <a name="generateFederatedPolicy" id="kube10k.aws_eks.OidcIrsa.generateFederatedPolicy"></a>

```typescript
public generateFederatedPolicy(scope: Construct, ns: string, sa: string): FederatedPrincipal
```

This function returns back an {@link FederatedPolicy} resource for use in creating an {@link Role} resource that will be used by a Kubernetes `ServiceAccount` to access AWS.

###### `scope`<sup>Required</sup> <a name="scope" id="kube10k.aws_eks.OidcIrsa.generateFederatedPolicy.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which the policy resource JSON should be created.

This should be the same construct in which the caller is.

---

###### `ns`<sup>Required</sup> <a name="ns" id="kube10k.aws_eks.OidcIrsa.generateFederatedPolicy.parameter.ns"></a>

- *Type:* string

The Namespace for the ServiceAccount.

---

###### `sa`<sup>Required</sup> <a name="sa" id="kube10k.aws_eks.OidcIrsa.generateFederatedPolicy.parameter.sa"></a>

- *Type:* string

The ServiceAccount name.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_eks.OidcIrsa.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.aws_eks.OidcIrsa.isConstruct"></a>

```typescript
import { aws_eks } from 'kube10k'

aws_eks.OidcIrsa.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.aws_eks.OidcIrsa.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.OidcIrsa.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.aws_eks.OidcIrsa.property.clusterIdString">clusterIdString</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.aws_eks.OidcIrsa.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `clusterIdString`<sup>Required</sup> <a name="clusterIdString" id="kube10k.aws_eks.OidcIrsa.property.clusterIdString"></a>

```typescript
public readonly clusterIdString: string;
```

- *Type:* string

---


### VpcStack <a name="VpcStack" id="kube10k.aws_vpc.VpcStack"></a>

#### Initializers <a name="Initializers" id="kube10k.aws_vpc.VpcStack.Initializer"></a>

```typescript
import { aws_vpc } from 'kube10k'

new aws_vpc.VpcStack(scope: Construct, id: string, props?: VpcStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_vpc.VpcStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#kube10k.aws_vpc.VpcStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.aws_vpc.VpcStack.Initializer.parameter.props">props</a></code> | <code>kube10k.aws_vpc.VpcStackProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.aws_vpc.VpcStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.aws_vpc.VpcStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="kube10k.aws_vpc.VpcStack.Initializer.parameter.props"></a>

- *Type:* kube10k.aws_vpc.VpcStackProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_vpc.VpcStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#kube10k.aws_vpc.VpcStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#kube10k.aws_vpc.VpcStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#kube10k.aws_vpc.VpcStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#kube10k.aws_vpc.VpcStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a value. |
| <code><a href="#kube10k.aws_vpc.VpcStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#kube10k.aws_vpc.VpcStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#kube10k.aws_vpc.VpcStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#kube10k.aws_vpc.VpcStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#kube10k.aws_vpc.VpcStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#kube10k.aws_vpc.VpcStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#kube10k.aws_vpc.VpcStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#kube10k.aws_vpc.VpcStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |

---

##### `toString` <a name="toString" id="kube10k.aws_vpc.VpcStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="kube10k.aws_vpc.VpcStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="kube10k.aws_vpc.VpcStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="kube10k.aws_vpc.VpcStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="kube10k.aws_vpc.VpcStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="kube10k.aws_vpc.VpcStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.aws_vpc.VpcStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="kube10k.aws_vpc.VpcStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="kube10k.aws_vpc.VpcStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportValue` <a name="exportValue" id="kube10k.aws_vpc.VpcStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
   stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
   remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
   will make sure the CloudFormation Export continues to exist while the relationship
   between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="kube10k.aws_vpc.VpcStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="kube10k.aws_vpc.VpcStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="kube10k.aws_vpc.VpcStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

   arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="kube10k.aws_vpc.VpcStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="kube10k.aws_vpc.VpcStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="kube10k.aws_vpc.VpcStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="kube10k.aws_vpc.VpcStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="kube10k.aws_vpc.VpcStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="kube10k.aws_vpc.VpcStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="kube10k.aws_vpc.VpcStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="kube10k.aws_vpc.VpcStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="kube10k.aws_vpc.VpcStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="kube10k.aws_vpc.VpcStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="kube10k.aws_vpc.VpcStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="kube10k.aws_vpc.VpcStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.aws_vpc.VpcStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="kube10k.aws_vpc.VpcStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="kube10k.aws_vpc.VpcStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="kube10k.aws_vpc.VpcStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="kube10k.aws_vpc.VpcStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.aws_vpc.VpcStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="kube10k.aws_vpc.VpcStack.toJsonString.parameter.space"></a>

- *Type:* number

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_vpc.VpcStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#kube10k.aws_vpc.VpcStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#kube10k.aws_vpc.VpcStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.aws_vpc.VpcStack.isConstruct"></a>

```typescript
import { aws_vpc } from 'kube10k'

aws_vpc.VpcStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.aws_vpc.VpcStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="kube10k.aws_vpc.VpcStack.isStack"></a>

```typescript
import { aws_vpc } from 'kube10k'

aws_vpc.VpcStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.aws_vpc.VpcStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="kube10k.aws_vpc.VpcStack.of"></a>

```typescript
import { aws_vpc } from 'kube10k'

aws_vpc.VpcStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="kube10k.aws_vpc.VpcStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#kube10k.aws_vpc.VpcStack.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.aws_vpc.VpcStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="kube10k.aws_vpc.VpcStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
    either be a concrete account (e.g. `585695031111`) or the
    `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
    `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="kube10k.aws_vpc.VpcStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="kube10k.aws_vpc.VpcStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="kube10k.aws_vpc.VpcStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="kube10k.aws_vpc.VpcStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="kube10k.aws_vpc.VpcStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="kube10k.aws_vpc.VpcStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="kube10k.aws_vpc.VpcStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="kube10k.aws_vpc.VpcStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="kube10k.aws_vpc.VpcStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
    either be a concerete region (e.g. `us-west-2`) or the `Aws.REGION`
    token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
    `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="kube10k.aws_vpc.VpcStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="kube10k.aws_vpc.VpcStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="kube10k.aws_vpc.VpcStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="kube10k.aws_vpc.VpcStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="kube10k.aws_vpc.VpcStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="kube10k.aws_vpc.VpcStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="kube10k.aws_vpc.VpcStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="kube10k.aws_vpc.VpcStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="kube10k.aws_vpc.VpcStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="kube10k.aws_vpc.VpcStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="kube10k.aws_vpc.VpcStack.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---


### WorkloadSubnets <a name="WorkloadSubnets" id="kube10k.aws_vpc.WorkloadSubnets"></a>

The WorkloadSubnets construct creates a dedicated CIDR Range with Subnets for a particular workload.

It is expected that the subnetes will host both the
EC2 Nodes and the Pod IPs themselves.

** "No" to EKS "Custom Networking Mode"

Ref: https://docs.aws.amazon.com/eks/latest/userguide/cni-custom-network.html

The "Custom Networking Mode" that AWS proposes in the above doc involves
creating dedicated `ENIConfig` resources for each custom Subnet/SecurityGroup
mapping that you want to put your workloads onto. The challenge is that your
EKS Nodes must also live in the same Availbility Zone as the Subnet in your
ENI Config, and a node can only launch Pods on a single ENIConfig.

This limitation makes the mapping of Nodes<->ENIConfig complicated, is not
cost effective, and greatly increases the complexity of the configuration.

** "Yes" to colocating Nodes and Pods

By not running the aws-vpc-cni pods in the custom networking mode, Pods
automatically get assigned to the same Subnet Id as the EC2 host. This allows
you to scale out multiple {@link WorkloadSubnets}, and then launch compute
nodes on those Subnets for scale-out beyond individual CIDR or Subnet limits.

#### Initializers <a name="Initializers" id="kube10k.aws_vpc.WorkloadSubnets.Initializer"></a>

```typescript
import { aws_vpc } from 'kube10k'

new aws_vpc.WorkloadSubnets(scope: Stack, id: string, props: WorkloadSubnetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_vpc.WorkloadSubnets.Initializer.parameter.scope">scope</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#kube10k.aws_vpc.WorkloadSubnets.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.aws_vpc.WorkloadSubnets.Initializer.parameter.props">props</a></code> | <code>kube10k.aws_vpc.WorkloadSubnetProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.aws_vpc.WorkloadSubnets.Initializer.parameter.scope"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.aws_vpc.WorkloadSubnets.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="kube10k.aws_vpc.WorkloadSubnets.Initializer.parameter.props"></a>

- *Type:* kube10k.aws_vpc.WorkloadSubnetProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_vpc.WorkloadSubnets.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="kube10k.aws_vpc.WorkloadSubnets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_vpc.WorkloadSubnets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.aws_vpc.WorkloadSubnets.isConstruct"></a>

```typescript
import { aws_vpc } from 'kube10k'

aws_vpc.WorkloadSubnets.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.aws_vpc.WorkloadSubnets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_vpc.WorkloadSubnets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.aws_vpc.WorkloadSubnets.property.blockSize">blockSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#kube10k.aws_vpc.WorkloadSubnets.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.aws_vpc.WorkloadSubnets.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#kube10k.aws_vpc.WorkloadSubnets.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.aws_vpc.WorkloadSubnets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `blockSize`<sup>Required</sup> <a name="blockSize" id="kube10k.aws_vpc.WorkloadSubnets.property.blockSize"></a>

```typescript
public readonly blockSize: number;
```

- *Type:* number

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="kube10k.aws_vpc.WorkloadSubnets.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="kube10k.aws_vpc.WorkloadSubnets.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="kube10k.aws_vpc.WorkloadSubnets.property.subnets"></a>

```typescript
public readonly subnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

---


## Structs <a name="Structs" id="Structs"></a>

### ClusterNetworkProps <a name="ClusterNetworkProps" id="kube10k.aws_eks.ClusterNetworkProps"></a>

#### Initializer <a name="Initializer" id="kube10k.aws_eks.ClusterNetworkProps.Initializer"></a>

```typescript
import { aws_eks } from 'kube10k'

const clusterNetworkProps: aws_eks.ClusterNetworkProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.ClusterNetworkProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | Reference to the {@link Vpc} in which the EKS cluster is being created. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="kube10k.aws_eks.ClusterNetworkProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

Reference to the {@link Vpc} in which the EKS cluster is being created.

---

### ClusterRolesProps <a name="ClusterRolesProps" id="kube10k.aws_eks.ClusterRolesProps"></a>

#### Initializer <a name="Initializer" id="kube10k.aws_eks.ClusterRolesProps.Initializer"></a>

```typescript
import { aws_eks } from 'kube10k'

const clusterRolesProps: aws_eks.ClusterRolesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.ClusterRolesProps.property.existingMasterRole">existingMasterRole</a></code> | <code>string</code> | ExistingMasterRole is an optional string that will prevent the creation of a new dedicated MasterRole for the cluster and instead use an existing role. |
| <code><a href="#kube10k.aws_eks.ClusterRolesProps.property.nodeRolePolicyStatement">nodeRolePolicyStatement</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | NodeRolePolicyStatement is an optional list of awsiam.PolicyStatement resources used to customize the permissions that the individual EC2 nodes in the cluster have. This can be useful when you want to craft specific ECR permissions for example. |

---

##### `existingMasterRole`<sup>Optional</sup> <a name="existingMasterRole" id="kube10k.aws_eks.ClusterRolesProps.property.existingMasterRole"></a>

```typescript
public readonly existingMasterRole: string;
```

- *Type:* string

ExistingMasterRole is an optional string that will prevent the creation of a new dedicated MasterRole for the cluster and instead use an existing role.

---

##### `nodeRolePolicyStatement`<sup>Optional</sup> <a name="nodeRolePolicyStatement" id="kube10k.aws_eks.ClusterRolesProps.property.nodeRolePolicyStatement"></a>

```typescript
public readonly nodeRolePolicyStatement: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]

NodeRolePolicyStatement is an optional list of awsiam.PolicyStatement resources used to customize the permissions that the individual EC2 nodes in the cluster have. This can be useful when you want to craft specific ECR permissions for example.

---

### ClusterStackProps <a name="ClusterStackProps" id="kube10k.stacks.ClusterStackProps"></a>

#### Initializer <a name="Initializer" id="kube10k.stacks.ClusterStackProps.Initializer"></a>

```typescript
import { stacks } from 'kube10k'

const clusterStackProps: stacks.ClusterStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.ClusterStackProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#kube10k.stacks.ClusterStackProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#kube10k.stacks.ClusterStackProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#kube10k.stacks.ClusterStackProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#kube10k.stacks.ClusterStackProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#kube10k.stacks.ClusterStackProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#kube10k.stacks.ClusterStackProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#kube10k.stacks.ClusterStackProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#kube10k.stacks.ClusterStackProps.property.clusterName">clusterName</a></code> | <code>string</code> | clusterName is the desired name for the EKS Cluster. |
| <code><a href="#kube10k.stacks.ClusterStackProps.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | kubernetesVersion is the target version for the EKS cluster. |
| <code><a href="#kube10k.stacks.ClusterStackProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC represents an already existing VPC that we will put the cluster into. |
| <code><a href="#kube10k.stacks.ClusterStackProps.property.optionalClusterStackProps">optionalClusterStackProps</a></code> | <code>kube10k.stacks.OptionalClusterStackProps</code> | Optional User-Customizable Parameters. |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="kube10k.stacks.ClusterStackProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="kube10k.stacks.ClusterStackProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="kube10k.stacks.ClusterStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="kube10k.stacks.ClusterStackProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `stackName`<sup>Optional</sup> <a name="stackName" id="kube10k.stacks.ClusterStackProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="kube10k.stacks.ClusterStackProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* `DefaultStackSynthesizer` if the `@aws-cdk/core:newStyleStackSynthesis` feature flag is set, `LegacyStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="kube10k.stacks.ClusterStackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="kube10k.stacks.ClusterStackProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="kube10k.stacks.ClusterStackProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

clusterName is the desired name for the EKS Cluster.

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="kube10k.stacks.ClusterStackProps.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

kubernetesVersion is the target version for the EKS cluster.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="kube10k.stacks.ClusterStackProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC represents an already existing VPC that we will put the cluster into.

---

##### `optionalClusterStackProps`<sup>Optional</sup> <a name="optionalClusterStackProps" id="kube10k.stacks.ClusterStackProps.property.optionalClusterStackProps"></a>

```typescript
public readonly optionalClusterStackProps: OptionalClusterStackProps;
```

- *Type:* kube10k.stacks.OptionalClusterStackProps

Optional User-Customizable Parameters.

---

### DefaultVpcProps <a name="DefaultVpcProps" id="kube10k.aws_vpc.DefaultVpcProps"></a>

#### Initializer <a name="Initializer" id="kube10k.aws_vpc.DefaultVpcProps.Initializer"></a>

```typescript
import { aws_vpc } from 'kube10k'

const defaultVpcProps: aws_vpc.DefaultVpcProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_vpc.DefaultVpcProps.property.cidr">cidr</a></code> | <code>string</code> | The CIDR range to use for the VPC. |
| <code><a href="#kube10k.aws_vpc.DefaultVpcProps.property.defaultInstanceTenancy">defaultInstanceTenancy</a></code> | <code>aws-cdk-lib.aws_ec2.DefaultInstanceTenancy</code> | The EC2 instance tenancy default for the VPC. |
| <code><a href="#kube10k.aws_vpc.DefaultVpcProps.property.gatewayEndpoints">gatewayEndpoints</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions}</code> | List of desired EC2 Gateway VPC Endpoints to be created within the VPC. |
| <code><a href="#kube10k.aws_vpc.DefaultVpcProps.property.interfaceEndpoints">interfaceEndpoints</a></code> | <code>aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService[]</code> | List of customized EC2 Interface VPC Endpoints to be created within the VPC. |
| <code><a href="#kube10k.aws_vpc.DefaultVpcProps.property.maxAZs">maxAZs</a></code> | <code>number</code> | The maximum number of AZs to leverage in the target AWS region for the VPC. |
| <code><a href="#kube10k.aws_vpc.DefaultVpcProps.property.name">name</a></code> | <code>string</code> | The desired "name" tag of the VPC. |
| <code><a href="#kube10k.aws_vpc.DefaultVpcProps.property.privateSubnetBlockSize">privateSubnetBlockSize</a></code> | <code>number</code> | The subnet size for the Private subnets. |
| <code><a href="#kube10k.aws_vpc.DefaultVpcProps.property.publicSubnetBlockSize">publicSubnetBlockSize</a></code> | <code>number</code> | The subnet size for the Public subnets. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="kube10k.aws_vpc.DefaultVpcProps.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string
- *Default:* "100.64.0.0/16"

The CIDR range to use for the VPC.

If not supplied, then the DEFAULT_CIDR
will be used.

---

##### `defaultInstanceTenancy`<sup>Optional</sup> <a name="defaultInstanceTenancy" id="kube10k.aws_vpc.DefaultVpcProps.property.defaultInstanceTenancy"></a>

```typescript
public readonly defaultInstanceTenancy: DefaultInstanceTenancy;
```

- *Type:* aws-cdk-lib.aws_ec2.DefaultInstanceTenancy

The EC2 instance tenancy default for the VPC.

---

##### `gatewayEndpoints`<sup>Optional</sup> <a name="gatewayEndpoints" id="kube10k.aws_vpc.DefaultVpcProps.property.gatewayEndpoints"></a>

```typescript
public readonly gatewayEndpoints: {[ key: string ]: GatewayVpcEndpointOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions}

List of desired EC2 Gateway VPC Endpoints to be created within the VPC.

---

##### `interfaceEndpoints`<sup>Optional</sup> <a name="interfaceEndpoints" id="kube10k.aws_vpc.DefaultVpcProps.property.interfaceEndpoints"></a>

```typescript
public readonly interfaceEndpoints: InterfaceVpcEndpointAwsService[];
```

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService[]

List of customized EC2 Interface VPC Endpoints to be created within the VPC.

---

##### `maxAZs`<sup>Optional</sup> <a name="maxAZs" id="kube10k.aws_vpc.DefaultVpcProps.property.maxAZs"></a>

```typescript
public readonly maxAZs: number;
```

- *Type:* number
- *Default:* 3

The maximum number of AZs to leverage in the target AWS region for the VPC.

We default is DEFAULT_MAX_AZs to 3 because most regions only have 3 AZs,
and because it's easier in most cases to think about quorums for stateful
services like Zookeeper when you only 3 zones.

---

##### `name`<sup>Optional</sup> <a name="name" id="kube10k.aws_vpc.DefaultVpcProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* this.node.path

The desired "name" tag of the VPC.

This can be changed at any time.

---

##### `privateSubnetBlockSize`<sup>Optional</sup> <a name="privateSubnetBlockSize" id="kube10k.aws_vpc.DefaultVpcProps.property.privateSubnetBlockSize"></a>

```typescript
public readonly privateSubnetBlockSize: number;
```

- *Type:* number
- *Default:* 20

The subnet size for the Private subnets.

These subnets generally should
be very large to support a large number of EC2 instances in each one. A
separate CIDR range will be used for the Pods.

---

##### `publicSubnetBlockSize`<sup>Optional</sup> <a name="publicSubnetBlockSize" id="kube10k.aws_vpc.DefaultVpcProps.property.publicSubnetBlockSize"></a>

```typescript
public readonly publicSubnetBlockSize: number;
```

- *Type:* number
- *Default:* 24

The subnet size for the Public subnets.

These Public subnets are only
used for things like ALB ENIs when you are exposing services to the
internet, otherwise everything is launched on Private Subnets.

---

### Kube10kClusterProps <a name="Kube10kClusterProps" id="kube10k.aws_eks.Kube10kClusterProps"></a>

#### Initializer <a name="Initializer" id="kube10k.aws_eks.Kube10kClusterProps.Initializer"></a>

```typescript
import { aws_eks } from 'kube10k'

const kube10kClusterProps: aws_eks.Kube10kClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.Kube10kClusterProps.property.clusterName">clusterName</a></code> | <code>string</code> | clusterName defines the name of the cluster in EKS - this is an immutable value once you set it. |
| <code><a href="#kube10k.aws_eks.Kube10kClusterProps.property.clusterRoles">clusterRoles</a></code> | <code>kube10k.aws_eks.ClusterRoles</code> | ClusterRoles (required, **immutable**) provides pre-defined IAM Roles for the EKS Cluster Control Plane and the EC2 Node Role. |
| <code><a href="#kube10k.aws_eks.Kube10kClusterProps.property.clusterSecurityGroups">clusterSecurityGroups</a></code> | <code>kube10k.aws_eks.ClusterSecurityGroups</code> | ClusterNetworkPrep (required, **immutable**) provides dedicated Security Group IDs for the EKS Cluster Control Plane and EC2 Nodes. |
| <code><a href="#kube10k.aws_eks.Kube10kClusterProps.property.kubernetesVersion">kubernetesVersion</a></code> | <code>aws-cdk-lib.aws_eks.KubernetesVersion</code> | KubernetesVersion (optional) supplies the desired version of the Kubernetes cluster. |
| <code><a href="#kube10k.aws_eks.Kube10kClusterProps.property.optionalKube10kClusterProps">optionalKube10kClusterProps</a></code> | <code>kube10k.aws_eks.OptionalKube10kClusterProps</code> | Provides access to customize the Kube10kCluster more. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="kube10k.aws_eks.Kube10kClusterProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

clusterName defines the name of the cluster in EKS - this is an immutable value once you set it.

---

##### `clusterRoles`<sup>Required</sup> <a name="clusterRoles" id="kube10k.aws_eks.Kube10kClusterProps.property.clusterRoles"></a>

```typescript
public readonly clusterRoles: ClusterRoles;
```

- *Type:* kube10k.aws_eks.ClusterRoles

ClusterRoles (required, **immutable**) provides pre-defined IAM Roles for the EKS Cluster Control Plane and the EC2 Node Role.

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="clusterSecurityGroups" id="kube10k.aws_eks.Kube10kClusterProps.property.clusterSecurityGroups"></a>

```typescript
public readonly clusterSecurityGroups: ClusterSecurityGroups;
```

- *Type:* kube10k.aws_eks.ClusterSecurityGroups

ClusterNetworkPrep (required, **immutable**) provides dedicated Security Group IDs for the EKS Cluster Control Plane and EC2 Nodes.

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="kube10k.aws_eks.Kube10kClusterProps.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: KubernetesVersion;
```

- *Type:* aws-cdk-lib.aws_eks.KubernetesVersion

KubernetesVersion (optional) supplies the desired version of the Kubernetes cluster.

This can be increased over time to perform cluster upgrades.

---

##### `optionalKube10kClusterProps`<sup>Optional</sup> <a name="optionalKube10kClusterProps" id="kube10k.aws_eks.Kube10kClusterProps.property.optionalKube10kClusterProps"></a>

```typescript
public readonly optionalKube10kClusterProps: OptionalKube10kClusterProps;
```

- *Type:* kube10k.aws_eks.OptionalKube10kClusterProps

Provides access to customize the Kube10kCluster more.

---

### NodeLabel <a name="NodeLabel" id="kube10k.aws_eks.NodeLabel"></a>

#### Initializer <a name="Initializer" id="kube10k.aws_eks.NodeLabel.Initializer"></a>

```typescript
import { aws_eks } from 'kube10k'

const nodeLabel: aws_eks.NodeLabel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.NodeLabel.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.NodeLabel.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="kube10k.aws_eks.NodeLabel.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="kube10k.aws_eks.NodeLabel.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### OidcIrsaProps <a name="OidcIrsaProps" id="kube10k.aws_eks.OidcIrsaProps"></a>

#### Initializer <a name="Initializer" id="kube10k.aws_eks.OidcIrsaProps.Initializer"></a>

```typescript
import { aws_eks } from 'kube10k'

const oidcIrsaProps: aws_eks.OidcIrsaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.OidcIrsaProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.Cluster</code> | We use the {@link Cluster} resource here specifically because we need access to the `clusterOpenIdConnectIssuerUrl` property which is not exposed in the {@link ICluster} resource. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="kube10k.aws_eks.OidcIrsaProps.property.cluster"></a>

```typescript
public readonly cluster: Cluster;
```

- *Type:* aws-cdk-lib.aws_eks.Cluster

We use the {@link Cluster} resource here specifically because we need access to the `clusterOpenIdConnectIssuerUrl` property which is not exposed in the {@link ICluster} resource.

---

### OptionalClusterStackProps <a name="OptionalClusterStackProps" id="kube10k.stacks.OptionalClusterStackProps"></a>

#### Initializer <a name="Initializer" id="kube10k.stacks.OptionalClusterStackProps.Initializer"></a>

```typescript
import { stacks } from 'kube10k'

const optionalClusterStackProps: stacks.OptionalClusterStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.OptionalClusterStackProps.property.commonTags">commonTags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | CommonTags are a set of CfnTag resources that will be added ultimately to the EKS cluster, if the cluster is provisioned by this stack (as opposed to the "bring your own cluster" model). |
| <code><a href="#kube10k.stacks.OptionalClusterStackProps.property.existingMasterRole">existingMasterRole</a></code> | <code>string</code> | existingMasterRole is the short role name to an already existing AWS IAM Role that will be granted "system:master"s access into the cluster. |
| <code><a href="#kube10k.stacks.OptionalClusterStackProps.property.nodeRolePolicyStatement">nodeRolePolicyStatement</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | NodeRolePolicyStatement is an optional list of awsiam.PolicyStatement resources used to customize the permissions that the individual EC2 nodes in the cluster have. This can be useful when you want to craft specific ECR permissions for example. |
| <code><a href="#kube10k.stacks.OptionalClusterStackProps.property.roleMappings">roleMappings</a></code> | <code>{[ key: string ]: string}</code> | roleMappings is a map of key/value pairs that will be used to map existing IAM Roles to internal Kubernetes groups. |
| <code><a href="#kube10k.stacks.OptionalClusterStackProps.property.serviceIPv4Cidr">serviceIPv4Cidr</a></code> | <code>string</code> | serviceIPv4Cidr is the "Service IP range" that will be used by the cluster when creating internal services. |

---

##### `commonTags`<sup>Optional</sup> <a name="commonTags" id="kube10k.stacks.OptionalClusterStackProps.property.commonTags"></a>

```typescript
public readonly commonTags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

CommonTags are a set of CfnTag resources that will be added ultimately to the EKS cluster, if the cluster is provisioned by this stack (as opposed to the "bring your own cluster" model).

NOTE: https://github.com/aws/aws-cdk/issues/19388#issuecomment-1268870426 prevents tags from being updated after
initial creation of the EKS cluster.

---

##### `existingMasterRole`<sup>Optional</sup> <a name="existingMasterRole" id="kube10k.stacks.OptionalClusterStackProps.property.existingMasterRole"></a>

```typescript
public readonly existingMasterRole: string;
```

- *Type:* string

existingMasterRole is the short role name to an already existing AWS IAM Role that will be granted "system:master"s access into the cluster.

---

##### `nodeRolePolicyStatement`<sup>Optional</sup> <a name="nodeRolePolicyStatement" id="kube10k.stacks.OptionalClusterStackProps.property.nodeRolePolicyStatement"></a>

```typescript
public readonly nodeRolePolicyStatement: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]

NodeRolePolicyStatement is an optional list of awsiam.PolicyStatement resources used to customize the permissions that the individual EC2 nodes in the cluster have. This can be useful when you want to craft specific ECR permissions for example.

---

##### `roleMappings`<sup>Optional</sup> <a name="roleMappings" id="kube10k.stacks.OptionalClusterStackProps.property.roleMappings"></a>

```typescript
public readonly roleMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

roleMappings is a map of key/value pairs that will be used to map existing IAM Roles to internal Kubernetes groups.

This list of mappings is how you
provide access to th cluster through IAM Roles ... but OIDC-based
authentication is the recommended approach (through Google, Okta, etc).

   roleMappings: {
     "myIamRole": "system:masters",
   }

---

##### `serviceIPv4Cidr`<sup>Optional</sup> <a name="serviceIPv4Cidr" id="kube10k.stacks.OptionalClusterStackProps.property.serviceIPv4Cidr"></a>

```typescript
public readonly serviceIPv4Cidr: string;
```

- *Type:* string

serviceIPv4Cidr is the "Service IP range" that will be used by the cluster when creating internal services.

The default is 172.20.0.0/16 and should be
fine for most cases.

---

### OptionalKube10kClusterProps <a name="OptionalKube10kClusterProps" id="kube10k.aws_eks.OptionalKube10kClusterProps"></a>

#### Initializer <a name="Initializer" id="kube10k.aws_eks.OptionalKube10kClusterProps.Initializer"></a>

```typescript
import { aws_eks } from 'kube10k'

const optionalKube10kClusterProps: aws_eks.OptionalKube10kClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.OptionalKube10kClusterProps.property.commonTags">commonTags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.OptionalKube10kClusterProps.property.ipvsScheduler">ipvsScheduler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.OptionalKube10kClusterProps.property.proxyMode">proxyMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.OptionalKube10kClusterProps.property.serviceIPv4Cidr">serviceIPv4Cidr</a></code> | <code>string</code> | ServiceIPv4Cidr (optional, **immutable**) is the "Service IP range" that will be used by the cluster when creating internal services. |

---

##### `commonTags`<sup>Optional</sup> <a name="commonTags" id="kube10k.aws_eks.OptionalKube10kClusterProps.property.commonTags"></a>

```typescript
public readonly commonTags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

---

##### `ipvsScheduler`<sup>Optional</sup> <a name="ipvsScheduler" id="kube10k.aws_eks.OptionalKube10kClusterProps.property.ipvsScheduler"></a>

```typescript
public readonly ipvsScheduler: string;
```

- *Type:* string

---

##### `proxyMode`<sup>Optional</sup> <a name="proxyMode" id="kube10k.aws_eks.OptionalKube10kClusterProps.property.proxyMode"></a>

```typescript
public readonly proxyMode: string;
```

- *Type:* string

---

##### `serviceIPv4Cidr`<sup>Optional</sup> <a name="serviceIPv4Cidr" id="kube10k.aws_eks.OptionalKube10kClusterProps.property.serviceIPv4Cidr"></a>

```typescript
public readonly serviceIPv4Cidr: string;
```

- *Type:* string

ServiceIPv4Cidr (optional, **immutable**) is the "Service IP range" that will be used by the cluster when creating internal services.

The default is
172.20.0.0/16 and should be fine for most cases. This setting cannot be
changed once the initial stack has been created.

---

### OptionalWorkloadSubnetProps <a name="OptionalWorkloadSubnetProps" id="kube10k.aws_vpc.OptionalWorkloadSubnetProps"></a>

#### Initializer <a name="Initializer" id="kube10k.aws_vpc.OptionalWorkloadSubnetProps.Initializer"></a>

```typescript
import { aws_vpc } from 'kube10k'

const optionalWorkloadSubnetProps: aws_vpc.OptionalWorkloadSubnetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_vpc.OptionalWorkloadSubnetProps.property.blockSize">blockSize</a></code> | <code>number</code> | Per-Subnet Subnet Block Size (eg: 18). |
| <code><a href="#kube10k.aws_vpc.OptionalWorkloadSubnetProps.property.cidr">cidr</a></code> | <code>string</code> | Workload CIDR Range (eg: 100.65.0.0/16). |

---

##### `blockSize`<sup>Optional</sup> <a name="blockSize" id="kube10k.aws_vpc.OptionalWorkloadSubnetProps.property.blockSize"></a>

```typescript
public readonly blockSize: number;
```

- *Type:* number

Per-Subnet Subnet Block Size (eg: 18).

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="kube10k.aws_vpc.OptionalWorkloadSubnetProps.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Workload CIDR Range (eg: 100.65.0.0/16).

---

### VpcStackProps <a name="VpcStackProps" id="kube10k.aws_vpc.VpcStackProps"></a>

#### Initializer <a name="Initializer" id="kube10k.aws_vpc.VpcStackProps.Initializer"></a>

```typescript
import { aws_vpc } from 'kube10k'

const vpcStackProps: aws_vpc.VpcStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_vpc.VpcStackProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#kube10k.aws_vpc.VpcStackProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#kube10k.aws_vpc.VpcStackProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#kube10k.aws_vpc.VpcStackProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#kube10k.aws_vpc.VpcStackProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#kube10k.aws_vpc.VpcStackProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#kube10k.aws_vpc.VpcStackProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#kube10k.aws_vpc.VpcStackProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#kube10k.aws_vpc.VpcStackProps.property.vpcProps">vpcProps</a></code> | <code>kube10k.aws_vpc.DefaultVpcProps</code> | Provides access to customize the VPC being created. |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="kube10k.aws_vpc.VpcStackProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="kube10k.aws_vpc.VpcStackProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="kube10k.aws_vpc.VpcStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="kube10k.aws_vpc.VpcStackProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `stackName`<sup>Optional</sup> <a name="stackName" id="kube10k.aws_vpc.VpcStackProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="kube10k.aws_vpc.VpcStackProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* `DefaultStackSynthesizer` if the `@aws-cdk/core:newStyleStackSynthesis` feature flag is set, `LegacyStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="kube10k.aws_vpc.VpcStackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="kube10k.aws_vpc.VpcStackProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `vpcProps`<sup>Optional</sup> <a name="vpcProps" id="kube10k.aws_vpc.VpcStackProps.property.vpcProps"></a>

```typescript
public readonly vpcProps: DefaultVpcProps;
```

- *Type:* kube10k.aws_vpc.DefaultVpcProps

Provides access to customize the VPC being created.

Ref: {@link DefaultVpcProps}

---

### WorkloadSubnetProps <a name="WorkloadSubnetProps" id="kube10k.aws_vpc.WorkloadSubnetProps"></a>

#### Initializer <a name="Initializer" id="kube10k.aws_vpc.WorkloadSubnetProps.Initializer"></a>

```typescript
import { aws_vpc } from 'kube10k'

const workloadSubnetProps: aws_vpc.WorkloadSubnetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_vpc.WorkloadSubnetProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.ICluster</code> | {@link ICluster} reference to the cluster that these Subnets are for. |
| <code><a href="#kube10k.aws_vpc.WorkloadSubnetProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | {@link IVpc} reference to the VPC that the Subnets will be created in. |
| <code><a href="#kube10k.aws_vpc.WorkloadSubnetProps.property.optionalWorkloadSubnetProps">optionalWorkloadSubnetProps</a></code> | <code>kube10k.aws_vpc.OptionalWorkloadSubnetProps</code> | Optional customizable parameters for the WorkloadSubnet. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="kube10k.aws_vpc.WorkloadSubnetProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_eks.ICluster

{@link ICluster} reference to the cluster that these Subnets are for.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="kube10k.aws_vpc.WorkloadSubnetProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

{@link IVpc} reference to the VPC that the Subnets will be created in.

---

##### `optionalWorkloadSubnetProps`<sup>Optional</sup> <a name="optionalWorkloadSubnetProps" id="kube10k.aws_vpc.WorkloadSubnetProps.property.optionalWorkloadSubnetProps"></a>

```typescript
public readonly optionalWorkloadSubnetProps: OptionalWorkloadSubnetProps;
```

- *Type:* kube10k.aws_vpc.OptionalWorkloadSubnetProps

Optional customizable parameters for the WorkloadSubnet.

---

## Classes <a name="Classes" id="Classes"></a>

### NodeLabels <a name="NodeLabels" id="kube10k.aws_eks.NodeLabels"></a>

#### Initializers <a name="Initializers" id="kube10k.aws_eks.NodeLabels.Initializer"></a>

```typescript
import { aws_eks } from 'kube10k'

new aws_eks.NodeLabels()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_eks.NodeLabels.addInternalLabel">addInternalLabel</a></code> | *No description.* |
| <code><a href="#kube10k.aws_eks.NodeLabels.addLabel">addLabel</a></code> | *No description.* |
| <code><a href="#kube10k.aws_eks.NodeLabels.labelsAsMap">labelsAsMap</a></code> | *No description.* |

---

##### `addInternalLabel` <a name="addInternalLabel" id="kube10k.aws_eks.NodeLabels.addInternalLabel"></a>

```typescript
public addInternalLabel(subKey: string, value: string): void
```

###### `subKey`<sup>Required</sup> <a name="subKey" id="kube10k.aws_eks.NodeLabels.addInternalLabel.parameter.subKey"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.aws_eks.NodeLabels.addInternalLabel.parameter.value"></a>

- *Type:* string

---

##### `addLabel` <a name="addLabel" id="kube10k.aws_eks.NodeLabels.addLabel"></a>

```typescript
public addLabel(key: string, value: string): void
```

###### `key`<sup>Required</sup> <a name="key" id="kube10k.aws_eks.NodeLabels.addLabel.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.aws_eks.NodeLabels.addLabel.parameter.value"></a>

- *Type:* string

---

##### `labelsAsMap` <a name="labelsAsMap" id="kube10k.aws_eks.NodeLabels.labelsAsMap"></a>

```typescript
public labelsAsMap(): {[ key: string ]: string}
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.NodeLabels.property.labels">labels</a></code> | <code>kube10k.aws_eks.NodeLabel[]</code> | *No description.* |

---

##### `labels`<sup>Required</sup> <a name="labels" id="kube10k.aws_eks.NodeLabels.property.labels"></a>

```typescript
public readonly labels: NodeLabel[];
```

- *Type:* kube10k.aws_eks.NodeLabel[]

---


### NodeTaint <a name="NodeTaint" id="kube10k.aws_eks.NodeTaint"></a>

#### Initializers <a name="Initializers" id="kube10k.aws_eks.NodeTaint.Initializer"></a>

```typescript
import { aws_eks } from 'kube10k'

new aws_eks.NodeTaint(key: string, value: string, effect?: TaintedNodeEffect, internal?: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.NodeTaint.Initializer.parameter.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.NodeTaint.Initializer.parameter.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.NodeTaint.Initializer.parameter.effect">effect</a></code> | <code>kube10k.aws_eks.TaintedNodeEffect</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.NodeTaint.Initializer.parameter.internal">internal</a></code> | <code>boolean</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="kube10k.aws_eks.NodeTaint.Initializer.parameter.key"></a>

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="kube10k.aws_eks.NodeTaint.Initializer.parameter.value"></a>

- *Type:* string

---

##### `effect`<sup>Optional</sup> <a name="effect" id="kube10k.aws_eks.NodeTaint.Initializer.parameter.effect"></a>

- *Type:* kube10k.aws_eks.TaintedNodeEffect

---

##### `internal`<sup>Optional</sup> <a name="internal" id="kube10k.aws_eks.NodeTaint.Initializer.parameter.internal"></a>

- *Type:* boolean

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_eks.NodeTaint.getPreferredNodeAffeinity">getPreferredNodeAffeinity</a></code> | *No description.* |
| <code><a href="#kube10k.aws_eks.NodeTaint.nodeSelector">nodeSelector</a></code> | *No description.* |
| <code><a href="#kube10k.aws_eks.NodeTaint.toleration">toleration</a></code> | *No description.* |

---

##### `getPreferredNodeAffeinity` <a name="getPreferredNodeAffeinity" id="kube10k.aws_eks.NodeTaint.getPreferredNodeAffeinity"></a>

```typescript
public getPreferredNodeAffeinity(weight?: number): {[ key: string ]: any}
```

###### `weight`<sup>Optional</sup> <a name="weight" id="kube10k.aws_eks.NodeTaint.getPreferredNodeAffeinity.parameter.weight"></a>

- *Type:* number

---

##### `nodeSelector` <a name="nodeSelector" id="kube10k.aws_eks.NodeTaint.nodeSelector"></a>

```typescript
public nodeSelector(): {[ key: string ]: string}
```

##### `toleration` <a name="toleration" id="kube10k.aws_eks.NodeTaint.toleration"></a>

```typescript
public toleration(): {[ key: string ]: string}
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.aws_eks.NodeTaint.property.effect">effect</a></code> | <code>kube10k.aws_eks.TaintedNodeEffect</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.NodeTaint.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.aws_eks.NodeTaint.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `effect`<sup>Required</sup> <a name="effect" id="kube10k.aws_eks.NodeTaint.property.effect"></a>

```typescript
public readonly effect: TaintedNodeEffect;
```

- *Type:* kube10k.aws_eks.TaintedNodeEffect

---

##### `key`<sup>Required</sup> <a name="key" id="kube10k.aws_eks.NodeTaint.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="kube10k.aws_eks.NodeTaint.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---



## Enums <a name="Enums" id="Enums"></a>

### TaintedNodeEffect <a name="TaintedNodeEffect" id="kube10k.aws_eks.TaintedNodeEffect"></a>

Custom class for defining Taints and then populating Tolerations, BottleRocket Taint configs, etc.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.aws_eks.TaintedNodeEffect.NO_SCHEDULE">NO_SCHEDULE</a></code> | *No description.* |
| <code><a href="#kube10k.aws_eks.TaintedNodeEffect.NO_EXECUTE">NO_EXECUTE</a></code> | *No description.* |
| <code><a href="#kube10k.aws_eks.TaintedNodeEffect.PREFER_NO_SCHEDULE">PREFER_NO_SCHEDULE</a></code> | *No description.* |

---

##### `NO_SCHEDULE` <a name="NO_SCHEDULE" id="kube10k.aws_eks.TaintedNodeEffect.NO_SCHEDULE"></a>

---


##### `NO_EXECUTE` <a name="NO_EXECUTE" id="kube10k.aws_eks.TaintedNodeEffect.NO_EXECUTE"></a>

---


##### `PREFER_NO_SCHEDULE` <a name="PREFER_NO_SCHEDULE" id="kube10k.aws_eks.TaintedNodeEffect.PREFER_NO_SCHEDULE"></a>

---

