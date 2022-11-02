# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

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
| <code><a href="#kube10k.stacks.ClusterStack.property.cluster">cluster</a></code> | <code>kube10k.constructs.k8s.Kube10kCluster</code> | Provides direct access to the {@link Kube10kCluster} resource - the aws-cdk Layer3 construct used to create the cluster itself. |
| <code><a href="#kube10k.stacks.ClusterStack.property.clusterRoles">clusterRoles</a></code> | <code>kube10k.constructs.k8s.ClusterRoles</code> | Provides access to the {@link ClusterRoles} construct created in this stack for the cluster. |
| <code><a href="#kube10k.stacks.ClusterStack.property.clusterSecurityGroups">clusterSecurityGroups</a></code> | <code>kube10k.constructs.k8s.ClusterSecurityGroups</code> | Provides access to the {@link ClusterSecurityGroups} construct which contains references to the `NodeSecurityGroup`, `PodSecurityGroup` and `ControlPlaneSecurityGroup`. |
| <code><a href="#kube10k.stacks.ClusterStack.property.oidcIrsa">oidcIrsa</a></code> | <code>kube10k.constructs.k8s.OidcIrsa</code> | Provides access to the {@link OidcIrsa} construct. |
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

- *Type:* kube10k.constructs.k8s.Kube10kCluster

Provides direct access to the {@link Kube10kCluster} resource - the aws-cdk Layer3 construct used to create the cluster itself.

---

##### `clusterRoles`<sup>Required</sup> <a name="clusterRoles" id="kube10k.stacks.ClusterStack.property.clusterRoles"></a>

```typescript
public readonly clusterRoles: ClusterRoles;
```

- *Type:* kube10k.constructs.k8s.ClusterRoles

Provides access to the {@link ClusterRoles} construct created in this stack for the cluster.

Used to get access to the `NodeRole` mostly.

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="clusterSecurityGroups" id="kube10k.stacks.ClusterStack.property.clusterSecurityGroups"></a>

```typescript
public readonly clusterSecurityGroups: ClusterSecurityGroups;
```

- *Type:* kube10k.constructs.k8s.ClusterSecurityGroups

Provides access to the {@link ClusterSecurityGroups} construct which contains references to the `NodeSecurityGroup`, `PodSecurityGroup` and `ControlPlaneSecurityGroup`.

---

##### `oidcIrsa`<sup>Required</sup> <a name="oidcIrsa" id="kube10k.stacks.ClusterStack.property.oidcIrsa"></a>

```typescript
public readonly oidcIrsa: OidcIrsa;
```

- *Type:* kube10k.constructs.k8s.OidcIrsa

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


### ControllerAddonsStack <a name="ControllerAddonsStack" id="kube10k.stacks.ControllerAddonsStack"></a>

#### Initializers <a name="Initializers" id="kube10k.stacks.ControllerAddonsStack.Initializer"></a>

```typescript
import { stacks } from 'kube10k'

new stacks.ControllerAddonsStack(scope: Stack, id: string, props: ControllerAddonsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.Initializer.parameter.scope">scope</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.Initializer.parameter.props">props</a></code> | <code>kube10k.stacks.ControllerAddonsProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.stacks.ControllerAddonsStack.Initializer.parameter.scope"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.stacks.ControllerAddonsStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="kube10k.stacks.ControllerAddonsStack.Initializer.parameter.props"></a>

- *Type:* kube10k.stacks.ControllerAddonsProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a value. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.setParameter">setParameter</a></code> | Assign a value to one of the nested stack parameters. |

---

##### `toString` <a name="toString" id="kube10k.stacks.ControllerAddonsStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="kube10k.stacks.ControllerAddonsStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="kube10k.stacks.ControllerAddonsStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="kube10k.stacks.ControllerAddonsStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="kube10k.stacks.ControllerAddonsStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="kube10k.stacks.ControllerAddonsStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.stacks.ControllerAddonsStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="kube10k.stacks.ControllerAddonsStack.addTransform"></a>

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


###### `transform`<sup>Required</sup> <a name="transform" id="kube10k.stacks.ControllerAddonsStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportValue` <a name="exportValue" id="kube10k.stacks.ControllerAddonsStack.exportValue"></a>

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

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="kube10k.stacks.ControllerAddonsStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="kube10k.stacks.ControllerAddonsStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="kube10k.stacks.ControllerAddonsStack.formatArn"></a>

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

###### `components`<sup>Required</sup> <a name="components" id="kube10k.stacks.ControllerAddonsStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="kube10k.stacks.ControllerAddonsStack.getLogicalId"></a>

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

###### `element`<sup>Required</sup> <a name="element" id="kube10k.stacks.ControllerAddonsStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="kube10k.stacks.ControllerAddonsStack.regionalFact"></a>

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

###### `factName`<sup>Required</sup> <a name="factName" id="kube10k.stacks.ControllerAddonsStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="kube10k.stacks.ControllerAddonsStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="kube10k.stacks.ControllerAddonsStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="kube10k.stacks.ControllerAddonsStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="kube10k.stacks.ControllerAddonsStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="kube10k.stacks.ControllerAddonsStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="kube10k.stacks.ControllerAddonsStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="kube10k.stacks.ControllerAddonsStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.stacks.ControllerAddonsStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="kube10k.stacks.ControllerAddonsStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="kube10k.stacks.ControllerAddonsStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="kube10k.stacks.ControllerAddonsStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="kube10k.stacks.ControllerAddonsStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.stacks.ControllerAddonsStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="kube10k.stacks.ControllerAddonsStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `setParameter` <a name="setParameter" id="kube10k.stacks.ControllerAddonsStack.setParameter"></a>

```typescript
public setParameter(name: string, value: string): void
```

Assign a value to one of the nested stack parameters.

###### `name`<sup>Required</sup> <a name="name" id="kube10k.stacks.ControllerAddonsStack.setParameter.parameter.name"></a>

- *Type:* string

The parameter name (ID).

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.stacks.ControllerAddonsStack.setParameter.parameter.value"></a>

- *Type:* string

The value to assign.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.isNestedStack">isNestedStack</a></code> | Checks if `x` is an object of type `NestedStack`. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.stacks.ControllerAddonsStack.isConstruct"></a>

```typescript
import { stacks } from 'kube10k'

stacks.ControllerAddonsStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.ControllerAddonsStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="kube10k.stacks.ControllerAddonsStack.isStack"></a>

```typescript
import { stacks } from 'kube10k'

stacks.ControllerAddonsStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.ControllerAddonsStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="kube10k.stacks.ControllerAddonsStack.of"></a>

```typescript
import { stacks } from 'kube10k'

stacks.ControllerAddonsStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="kube10k.stacks.ControllerAddonsStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `isNestedStack` <a name="isNestedStack" id="kube10k.stacks.ControllerAddonsStack.isNestedStack"></a>

```typescript
import { stacks } from 'kube10k'

stacks.ControllerAddonsStack.isNestedStack(x: any)
```

Checks if `x` is an object of type `NestedStack`.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.ControllerAddonsStack.isNestedStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.stackId">stackId</a></code> | <code>string</code> | An attribute that represents the ID of the stack. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.stackName">stackName</a></code> | <code>string</code> | An attribute that represents the name of the nested stack. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#kube10k.stacks.ControllerAddonsStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.stacks.ControllerAddonsStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="kube10k.stacks.ControllerAddonsStack.property.account"></a>

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

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="kube10k.stacks.ControllerAddonsStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="kube10k.stacks.ControllerAddonsStack.property.availabilityZones"></a>

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

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="kube10k.stacks.ControllerAddonsStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="kube10k.stacks.ControllerAddonsStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="kube10k.stacks.ControllerAddonsStack.property.environment"></a>

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

##### `nested`<sup>Required</sup> <a name="nested" id="kube10k.stacks.ControllerAddonsStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="kube10k.stacks.ControllerAddonsStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="kube10k.stacks.ControllerAddonsStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="kube10k.stacks.ControllerAddonsStack.property.region"></a>

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

##### `stackId`<sup>Required</sup> <a name="stackId" id="kube10k.stacks.ControllerAddonsStack.property.stackId"></a>

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

##### `stackName`<sup>Required</sup> <a name="stackName" id="kube10k.stacks.ControllerAddonsStack.property.stackName"></a>

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

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="kube10k.stacks.ControllerAddonsStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="kube10k.stacks.ControllerAddonsStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="kube10k.stacks.ControllerAddonsStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="kube10k.stacks.ControllerAddonsStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="kube10k.stacks.ControllerAddonsStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="kube10k.stacks.ControllerAddonsStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="kube10k.stacks.ControllerAddonsStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="kube10k.stacks.ControllerAddonsStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---


### ManagedNodeGroupStack <a name="ManagedNodeGroupStack" id="kube10k.stacks.ManagedNodeGroupStack"></a>

A separate wrapper-stack for creating a dedicated one-off CloudFormation Stack that launches a Managed Node Group.

This would be used if you wish to
create multiple managed nodegroups that the default RootStack does not
support.

#### Initializers <a name="Initializers" id="kube10k.stacks.ManagedNodeGroupStack.Initializer"></a>

```typescript
import { stacks } from 'kube10k'

new stacks.ManagedNodeGroupStack(scope: Stack, id: string, props: ManagedNodeGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.Initializer.parameter.scope">scope</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.Initializer.parameter.props">props</a></code> | <code>kube10k.constructs.k8s.ManagedNodeGroupProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.stacks.ManagedNodeGroupStack.Initializer.parameter.scope"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.stacks.ManagedNodeGroupStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="kube10k.stacks.ManagedNodeGroupStack.Initializer.parameter.props"></a>

- *Type:* kube10k.constructs.k8s.ManagedNodeGroupProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a value. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |

---

##### `toString` <a name="toString" id="kube10k.stacks.ManagedNodeGroupStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="kube10k.stacks.ManagedNodeGroupStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="kube10k.stacks.ManagedNodeGroupStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="kube10k.stacks.ManagedNodeGroupStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="kube10k.stacks.ManagedNodeGroupStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="kube10k.stacks.ManagedNodeGroupStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.stacks.ManagedNodeGroupStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="kube10k.stacks.ManagedNodeGroupStack.addTransform"></a>

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


###### `transform`<sup>Required</sup> <a name="transform" id="kube10k.stacks.ManagedNodeGroupStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportValue` <a name="exportValue" id="kube10k.stacks.ManagedNodeGroupStack.exportValue"></a>

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

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="kube10k.stacks.ManagedNodeGroupStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="kube10k.stacks.ManagedNodeGroupStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="kube10k.stacks.ManagedNodeGroupStack.formatArn"></a>

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

###### `components`<sup>Required</sup> <a name="components" id="kube10k.stacks.ManagedNodeGroupStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="kube10k.stacks.ManagedNodeGroupStack.getLogicalId"></a>

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

###### `element`<sup>Required</sup> <a name="element" id="kube10k.stacks.ManagedNodeGroupStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="kube10k.stacks.ManagedNodeGroupStack.regionalFact"></a>

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

###### `factName`<sup>Required</sup> <a name="factName" id="kube10k.stacks.ManagedNodeGroupStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="kube10k.stacks.ManagedNodeGroupStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="kube10k.stacks.ManagedNodeGroupStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="kube10k.stacks.ManagedNodeGroupStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="kube10k.stacks.ManagedNodeGroupStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="kube10k.stacks.ManagedNodeGroupStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="kube10k.stacks.ManagedNodeGroupStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="kube10k.stacks.ManagedNodeGroupStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.stacks.ManagedNodeGroupStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="kube10k.stacks.ManagedNodeGroupStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="kube10k.stacks.ManagedNodeGroupStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="kube10k.stacks.ManagedNodeGroupStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="kube10k.stacks.ManagedNodeGroupStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.stacks.ManagedNodeGroupStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="kube10k.stacks.ManagedNodeGroupStack.toJsonString.parameter.space"></a>

- *Type:* number

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.stacks.ManagedNodeGroupStack.isConstruct"></a>

```typescript
import { stacks } from 'kube10k'

stacks.ManagedNodeGroupStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.ManagedNodeGroupStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="kube10k.stacks.ManagedNodeGroupStack.isStack"></a>

```typescript
import { stacks } from 'kube10k'

stacks.ManagedNodeGroupStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.ManagedNodeGroupStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="kube10k.stacks.ManagedNodeGroupStack.of"></a>

```typescript
import { stacks } from 'kube10k'

stacks.ManagedNodeGroupStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="kube10k.stacks.ManagedNodeGroupStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#kube10k.stacks.ManagedNodeGroupStack.property.nodeGroup">nodeGroup</a></code> | <code>kube10k.constructs.k8s.ManagedNodeGroup</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.stacks.ManagedNodeGroupStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="kube10k.stacks.ManagedNodeGroupStack.property.account"></a>

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

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="kube10k.stacks.ManagedNodeGroupStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="kube10k.stacks.ManagedNodeGroupStack.property.availabilityZones"></a>

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

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="kube10k.stacks.ManagedNodeGroupStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="kube10k.stacks.ManagedNodeGroupStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="kube10k.stacks.ManagedNodeGroupStack.property.environment"></a>

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

##### `nested`<sup>Required</sup> <a name="nested" id="kube10k.stacks.ManagedNodeGroupStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="kube10k.stacks.ManagedNodeGroupStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="kube10k.stacks.ManagedNodeGroupStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="kube10k.stacks.ManagedNodeGroupStack.property.region"></a>

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

##### `stackId`<sup>Required</sup> <a name="stackId" id="kube10k.stacks.ManagedNodeGroupStack.property.stackId"></a>

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


##### `stackName`<sup>Required</sup> <a name="stackName" id="kube10k.stacks.ManagedNodeGroupStack.property.stackName"></a>

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

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="kube10k.stacks.ManagedNodeGroupStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="kube10k.stacks.ManagedNodeGroupStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="kube10k.stacks.ManagedNodeGroupStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="kube10k.stacks.ManagedNodeGroupStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="kube10k.stacks.ManagedNodeGroupStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="kube10k.stacks.ManagedNodeGroupStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="kube10k.stacks.ManagedNodeGroupStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="kube10k.stacks.ManagedNodeGroupStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `nodeGroup`<sup>Required</sup> <a name="nodeGroup" id="kube10k.stacks.ManagedNodeGroupStack.property.nodeGroup"></a>

```typescript
public readonly nodeGroup: ManagedNodeGroup;
```

- *Type:* kube10k.constructs.k8s.ManagedNodeGroup

---


### NestedManagedNodeGroupStack <a name="NestedManagedNodeGroupStack" id="kube10k.stacks.NestedManagedNodeGroupStack"></a>

Wrapper-stack for creating a single nested stack with a Managed Node Group.

We directly pass in the @link ManagedNodeGroupProps, allowing the user to
customize the construct how they wish.

A nested stack is used for resource isolation - it makes it much easier to
handle dependency ordering and to keep the Root Stack from growing too large.

#### Initializers <a name="Initializers" id="kube10k.stacks.NestedManagedNodeGroupStack.Initializer"></a>

```typescript
import { stacks } from 'kube10k'

new stacks.NestedManagedNodeGroupStack(scope: Stack, id: string, props: ManagedNodeGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.Initializer.parameter.scope">scope</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.Initializer.parameter.props">props</a></code> | <code>kube10k.constructs.k8s.ManagedNodeGroupProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.stacks.NestedManagedNodeGroupStack.Initializer.parameter.scope"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.stacks.NestedManagedNodeGroupStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="kube10k.stacks.NestedManagedNodeGroupStack.Initializer.parameter.props"></a>

- *Type:* kube10k.constructs.k8s.ManagedNodeGroupProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a value. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.setParameter">setParameter</a></code> | Assign a value to one of the nested stack parameters. |

---

##### `toString` <a name="toString" id="kube10k.stacks.NestedManagedNodeGroupStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="kube10k.stacks.NestedManagedNodeGroupStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="kube10k.stacks.NestedManagedNodeGroupStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="kube10k.stacks.NestedManagedNodeGroupStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="kube10k.stacks.NestedManagedNodeGroupStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="kube10k.stacks.NestedManagedNodeGroupStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.stacks.NestedManagedNodeGroupStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="kube10k.stacks.NestedManagedNodeGroupStack.addTransform"></a>

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


###### `transform`<sup>Required</sup> <a name="transform" id="kube10k.stacks.NestedManagedNodeGroupStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportValue` <a name="exportValue" id="kube10k.stacks.NestedManagedNodeGroupStack.exportValue"></a>

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

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="kube10k.stacks.NestedManagedNodeGroupStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="kube10k.stacks.NestedManagedNodeGroupStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="kube10k.stacks.NestedManagedNodeGroupStack.formatArn"></a>

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

###### `components`<sup>Required</sup> <a name="components" id="kube10k.stacks.NestedManagedNodeGroupStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="kube10k.stacks.NestedManagedNodeGroupStack.getLogicalId"></a>

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

###### `element`<sup>Required</sup> <a name="element" id="kube10k.stacks.NestedManagedNodeGroupStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="kube10k.stacks.NestedManagedNodeGroupStack.regionalFact"></a>

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

###### `factName`<sup>Required</sup> <a name="factName" id="kube10k.stacks.NestedManagedNodeGroupStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="kube10k.stacks.NestedManagedNodeGroupStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="kube10k.stacks.NestedManagedNodeGroupStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="kube10k.stacks.NestedManagedNodeGroupStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="kube10k.stacks.NestedManagedNodeGroupStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="kube10k.stacks.NestedManagedNodeGroupStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="kube10k.stacks.NestedManagedNodeGroupStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="kube10k.stacks.NestedManagedNodeGroupStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.stacks.NestedManagedNodeGroupStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="kube10k.stacks.NestedManagedNodeGroupStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="kube10k.stacks.NestedManagedNodeGroupStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="kube10k.stacks.NestedManagedNodeGroupStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="kube10k.stacks.NestedManagedNodeGroupStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.stacks.NestedManagedNodeGroupStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="kube10k.stacks.NestedManagedNodeGroupStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `setParameter` <a name="setParameter" id="kube10k.stacks.NestedManagedNodeGroupStack.setParameter"></a>

```typescript
public setParameter(name: string, value: string): void
```

Assign a value to one of the nested stack parameters.

###### `name`<sup>Required</sup> <a name="name" id="kube10k.stacks.NestedManagedNodeGroupStack.setParameter.parameter.name"></a>

- *Type:* string

The parameter name (ID).

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.stacks.NestedManagedNodeGroupStack.setParameter.parameter.value"></a>

- *Type:* string

The value to assign.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.isNestedStack">isNestedStack</a></code> | Checks if `x` is an object of type `NestedStack`. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.stacks.NestedManagedNodeGroupStack.isConstruct"></a>

```typescript
import { stacks } from 'kube10k'

stacks.NestedManagedNodeGroupStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.NestedManagedNodeGroupStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="kube10k.stacks.NestedManagedNodeGroupStack.isStack"></a>

```typescript
import { stacks } from 'kube10k'

stacks.NestedManagedNodeGroupStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.NestedManagedNodeGroupStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="kube10k.stacks.NestedManagedNodeGroupStack.of"></a>

```typescript
import { stacks } from 'kube10k'

stacks.NestedManagedNodeGroupStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="kube10k.stacks.NestedManagedNodeGroupStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `isNestedStack` <a name="isNestedStack" id="kube10k.stacks.NestedManagedNodeGroupStack.isNestedStack"></a>

```typescript
import { stacks } from 'kube10k'

stacks.NestedManagedNodeGroupStack.isNestedStack(x: any)
```

Checks if `x` is an object of type `NestedStack`.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.NestedManagedNodeGroupStack.isNestedStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.stackId">stackId</a></code> | <code>string</code> | An attribute that represents the ID of the stack. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.stackName">stackName</a></code> | <code>string</code> | An attribute that represents the name of the nested stack. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#kube10k.stacks.NestedManagedNodeGroupStack.property.nodeGroup">nodeGroup</a></code> | <code>kube10k.constructs.k8s.ManagedNodeGroup</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.stacks.NestedManagedNodeGroupStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="kube10k.stacks.NestedManagedNodeGroupStack.property.account"></a>

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

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="kube10k.stacks.NestedManagedNodeGroupStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="kube10k.stacks.NestedManagedNodeGroupStack.property.availabilityZones"></a>

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

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="kube10k.stacks.NestedManagedNodeGroupStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="kube10k.stacks.NestedManagedNodeGroupStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="kube10k.stacks.NestedManagedNodeGroupStack.property.environment"></a>

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

##### `nested`<sup>Required</sup> <a name="nested" id="kube10k.stacks.NestedManagedNodeGroupStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="kube10k.stacks.NestedManagedNodeGroupStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="kube10k.stacks.NestedManagedNodeGroupStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="kube10k.stacks.NestedManagedNodeGroupStack.property.region"></a>

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

##### `stackId`<sup>Required</sup> <a name="stackId" id="kube10k.stacks.NestedManagedNodeGroupStack.property.stackId"></a>

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

##### `stackName`<sup>Required</sup> <a name="stackName" id="kube10k.stacks.NestedManagedNodeGroupStack.property.stackName"></a>

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

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="kube10k.stacks.NestedManagedNodeGroupStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="kube10k.stacks.NestedManagedNodeGroupStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="kube10k.stacks.NestedManagedNodeGroupStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="kube10k.stacks.NestedManagedNodeGroupStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="kube10k.stacks.NestedManagedNodeGroupStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="kube10k.stacks.NestedManagedNodeGroupStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="kube10k.stacks.NestedManagedNodeGroupStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="kube10k.stacks.NestedManagedNodeGroupStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `nodeGroup`<sup>Required</sup> <a name="nodeGroup" id="kube10k.stacks.NestedManagedNodeGroupStack.property.nodeGroup"></a>

```typescript
public readonly nodeGroup: ManagedNodeGroup;
```

- *Type:* kube10k.constructs.k8s.ManagedNodeGroup

---


### NestedWorkloadSubnetStack <a name="NestedWorkloadSubnetStack" id="kube10k.stacks.NestedWorkloadSubnetStack"></a>

Wrapper-stack for creating a set of Workload Subnets and associating them with a given VPC object.

These are held in their own nested stack for
organizational purposes primarily.

#### Initializers <a name="Initializers" id="kube10k.stacks.NestedWorkloadSubnetStack.Initializer"></a>

```typescript
import { stacks } from 'kube10k'

new stacks.NestedWorkloadSubnetStack(scope: Stack, id: string, props: WorkloadSubnetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.Initializer.parameter.scope">scope</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.Initializer.parameter.props">props</a></code> | <code>kube10k.constructs.k8s.WorkloadSubnetProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.stacks.NestedWorkloadSubnetStack.Initializer.parameter.scope"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.stacks.NestedWorkloadSubnetStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="kube10k.stacks.NestedWorkloadSubnetStack.Initializer.parameter.props"></a>

- *Type:* kube10k.constructs.k8s.WorkloadSubnetProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a value. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.setParameter">setParameter</a></code> | Assign a value to one of the nested stack parameters. |

---

##### `toString` <a name="toString" id="kube10k.stacks.NestedWorkloadSubnetStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="kube10k.stacks.NestedWorkloadSubnetStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="kube10k.stacks.NestedWorkloadSubnetStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="kube10k.stacks.NestedWorkloadSubnetStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="kube10k.stacks.NestedWorkloadSubnetStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="kube10k.stacks.NestedWorkloadSubnetStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.stacks.NestedWorkloadSubnetStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="kube10k.stacks.NestedWorkloadSubnetStack.addTransform"></a>

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


###### `transform`<sup>Required</sup> <a name="transform" id="kube10k.stacks.NestedWorkloadSubnetStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportValue` <a name="exportValue" id="kube10k.stacks.NestedWorkloadSubnetStack.exportValue"></a>

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

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="kube10k.stacks.NestedWorkloadSubnetStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="kube10k.stacks.NestedWorkloadSubnetStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="kube10k.stacks.NestedWorkloadSubnetStack.formatArn"></a>

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

###### `components`<sup>Required</sup> <a name="components" id="kube10k.stacks.NestedWorkloadSubnetStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="kube10k.stacks.NestedWorkloadSubnetStack.getLogicalId"></a>

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

###### `element`<sup>Required</sup> <a name="element" id="kube10k.stacks.NestedWorkloadSubnetStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="kube10k.stacks.NestedWorkloadSubnetStack.regionalFact"></a>

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

###### `factName`<sup>Required</sup> <a name="factName" id="kube10k.stacks.NestedWorkloadSubnetStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="kube10k.stacks.NestedWorkloadSubnetStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="kube10k.stacks.NestedWorkloadSubnetStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="kube10k.stacks.NestedWorkloadSubnetStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="kube10k.stacks.NestedWorkloadSubnetStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="kube10k.stacks.NestedWorkloadSubnetStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="kube10k.stacks.NestedWorkloadSubnetStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="kube10k.stacks.NestedWorkloadSubnetStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.stacks.NestedWorkloadSubnetStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="kube10k.stacks.NestedWorkloadSubnetStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="kube10k.stacks.NestedWorkloadSubnetStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="kube10k.stacks.NestedWorkloadSubnetStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="kube10k.stacks.NestedWorkloadSubnetStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.stacks.NestedWorkloadSubnetStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="kube10k.stacks.NestedWorkloadSubnetStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `setParameter` <a name="setParameter" id="kube10k.stacks.NestedWorkloadSubnetStack.setParameter"></a>

```typescript
public setParameter(name: string, value: string): void
```

Assign a value to one of the nested stack parameters.

###### `name`<sup>Required</sup> <a name="name" id="kube10k.stacks.NestedWorkloadSubnetStack.setParameter.parameter.name"></a>

- *Type:* string

The parameter name (ID).

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.stacks.NestedWorkloadSubnetStack.setParameter.parameter.value"></a>

- *Type:* string

The value to assign.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.isNestedStack">isNestedStack</a></code> | Checks if `x` is an object of type `NestedStack`. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.stacks.NestedWorkloadSubnetStack.isConstruct"></a>

```typescript
import { stacks } from 'kube10k'

stacks.NestedWorkloadSubnetStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.NestedWorkloadSubnetStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="kube10k.stacks.NestedWorkloadSubnetStack.isStack"></a>

```typescript
import { stacks } from 'kube10k'

stacks.NestedWorkloadSubnetStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.NestedWorkloadSubnetStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="kube10k.stacks.NestedWorkloadSubnetStack.of"></a>

```typescript
import { stacks } from 'kube10k'

stacks.NestedWorkloadSubnetStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="kube10k.stacks.NestedWorkloadSubnetStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `isNestedStack` <a name="isNestedStack" id="kube10k.stacks.NestedWorkloadSubnetStack.isNestedStack"></a>

```typescript
import { stacks } from 'kube10k'

stacks.NestedWorkloadSubnetStack.isNestedStack(x: any)
```

Checks if `x` is an object of type `NestedStack`.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.NestedWorkloadSubnetStack.isNestedStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.stackId">stackId</a></code> | <code>string</code> | An attribute that represents the ID of the stack. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.stackName">stackName</a></code> | <code>string</code> | An attribute that represents the name of the nested stack. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#kube10k.stacks.NestedWorkloadSubnetStack.property.workloadSubnets">workloadSubnets</a></code> | <code>kube10k.constructs.k8s.WorkloadSubnets</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.stacks.NestedWorkloadSubnetStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="kube10k.stacks.NestedWorkloadSubnetStack.property.account"></a>

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

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="kube10k.stacks.NestedWorkloadSubnetStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="kube10k.stacks.NestedWorkloadSubnetStack.property.availabilityZones"></a>

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

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="kube10k.stacks.NestedWorkloadSubnetStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="kube10k.stacks.NestedWorkloadSubnetStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="kube10k.stacks.NestedWorkloadSubnetStack.property.environment"></a>

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

##### `nested`<sup>Required</sup> <a name="nested" id="kube10k.stacks.NestedWorkloadSubnetStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="kube10k.stacks.NestedWorkloadSubnetStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="kube10k.stacks.NestedWorkloadSubnetStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="kube10k.stacks.NestedWorkloadSubnetStack.property.region"></a>

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

##### `stackId`<sup>Required</sup> <a name="stackId" id="kube10k.stacks.NestedWorkloadSubnetStack.property.stackId"></a>

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

##### `stackName`<sup>Required</sup> <a name="stackName" id="kube10k.stacks.NestedWorkloadSubnetStack.property.stackName"></a>

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

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="kube10k.stacks.NestedWorkloadSubnetStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="kube10k.stacks.NestedWorkloadSubnetStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="kube10k.stacks.NestedWorkloadSubnetStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="kube10k.stacks.NestedWorkloadSubnetStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="kube10k.stacks.NestedWorkloadSubnetStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="kube10k.stacks.NestedWorkloadSubnetStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="kube10k.stacks.NestedWorkloadSubnetStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="kube10k.stacks.NestedWorkloadSubnetStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `workloadSubnets`<sup>Required</sup> <a name="workloadSubnets" id="kube10k.stacks.NestedWorkloadSubnetStack.property.workloadSubnets"></a>

```typescript
public readonly workloadSubnets: WorkloadSubnets;
```

- *Type:* kube10k.constructs.k8s.WorkloadSubnets

---


### NetworkSecurityAddonsStack <a name="NetworkSecurityAddonsStack" id="kube10k.stacks.NetworkSecurityAddonsStack"></a>

#### Initializers <a name="Initializers" id="kube10k.stacks.NetworkSecurityAddonsStack.Initializer"></a>

```typescript
import { stacks } from 'kube10k'

new stacks.NetworkSecurityAddonsStack(scope: Stack, id: string, props: NetworkSecurityAddonsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.Initializer.parameter.scope">scope</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.Initializer.parameter.props">props</a></code> | <code>kube10k.stacks.NetworkSecurityAddonsProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.stacks.NetworkSecurityAddonsStack.Initializer.parameter.scope"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.stacks.NetworkSecurityAddonsStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="kube10k.stacks.NetworkSecurityAddonsStack.Initializer.parameter.props"></a>

- *Type:* kube10k.stacks.NetworkSecurityAddonsProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a value. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.setParameter">setParameter</a></code> | Assign a value to one of the nested stack parameters. |

---

##### `toString` <a name="toString" id="kube10k.stacks.NetworkSecurityAddonsStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="kube10k.stacks.NetworkSecurityAddonsStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="kube10k.stacks.NetworkSecurityAddonsStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="kube10k.stacks.NetworkSecurityAddonsStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="kube10k.stacks.NetworkSecurityAddonsStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="kube10k.stacks.NetworkSecurityAddonsStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.stacks.NetworkSecurityAddonsStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="kube10k.stacks.NetworkSecurityAddonsStack.addTransform"></a>

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


###### `transform`<sup>Required</sup> <a name="transform" id="kube10k.stacks.NetworkSecurityAddonsStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportValue` <a name="exportValue" id="kube10k.stacks.NetworkSecurityAddonsStack.exportValue"></a>

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

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="kube10k.stacks.NetworkSecurityAddonsStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="kube10k.stacks.NetworkSecurityAddonsStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="kube10k.stacks.NetworkSecurityAddonsStack.formatArn"></a>

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

###### `components`<sup>Required</sup> <a name="components" id="kube10k.stacks.NetworkSecurityAddonsStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="kube10k.stacks.NetworkSecurityAddonsStack.getLogicalId"></a>

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

###### `element`<sup>Required</sup> <a name="element" id="kube10k.stacks.NetworkSecurityAddonsStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="kube10k.stacks.NetworkSecurityAddonsStack.regionalFact"></a>

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

###### `factName`<sup>Required</sup> <a name="factName" id="kube10k.stacks.NetworkSecurityAddonsStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="kube10k.stacks.NetworkSecurityAddonsStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="kube10k.stacks.NetworkSecurityAddonsStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="kube10k.stacks.NetworkSecurityAddonsStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="kube10k.stacks.NetworkSecurityAddonsStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="kube10k.stacks.NetworkSecurityAddonsStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="kube10k.stacks.NetworkSecurityAddonsStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="kube10k.stacks.NetworkSecurityAddonsStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.stacks.NetworkSecurityAddonsStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="kube10k.stacks.NetworkSecurityAddonsStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="kube10k.stacks.NetworkSecurityAddonsStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="kube10k.stacks.NetworkSecurityAddonsStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="kube10k.stacks.NetworkSecurityAddonsStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.stacks.NetworkSecurityAddonsStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="kube10k.stacks.NetworkSecurityAddonsStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `setParameter` <a name="setParameter" id="kube10k.stacks.NetworkSecurityAddonsStack.setParameter"></a>

```typescript
public setParameter(name: string, value: string): void
```

Assign a value to one of the nested stack parameters.

###### `name`<sup>Required</sup> <a name="name" id="kube10k.stacks.NetworkSecurityAddonsStack.setParameter.parameter.name"></a>

- *Type:* string

The parameter name (ID).

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.stacks.NetworkSecurityAddonsStack.setParameter.parameter.value"></a>

- *Type:* string

The value to assign.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.isNestedStack">isNestedStack</a></code> | Checks if `x` is an object of type `NestedStack`. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.stacks.NetworkSecurityAddonsStack.isConstruct"></a>

```typescript
import { stacks } from 'kube10k'

stacks.NetworkSecurityAddonsStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.NetworkSecurityAddonsStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="kube10k.stacks.NetworkSecurityAddonsStack.isStack"></a>

```typescript
import { stacks } from 'kube10k'

stacks.NetworkSecurityAddonsStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.NetworkSecurityAddonsStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="kube10k.stacks.NetworkSecurityAddonsStack.of"></a>

```typescript
import { stacks } from 'kube10k'

stacks.NetworkSecurityAddonsStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="kube10k.stacks.NetworkSecurityAddonsStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `isNestedStack` <a name="isNestedStack" id="kube10k.stacks.NetworkSecurityAddonsStack.isNestedStack"></a>

```typescript
import { stacks } from 'kube10k'

stacks.NetworkSecurityAddonsStack.isNestedStack(x: any)
```

Checks if `x` is an object of type `NestedStack`.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.NetworkSecurityAddonsStack.isNestedStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.stackId">stackId</a></code> | <code>string</code> | An attribute that represents the ID of the stack. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.stackName">stackName</a></code> | <code>string</code> | An attribute that represents the name of the nested stack. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.coreDns">coreDns</a></code> | <code>kube10k.constructs.addons.CoreDns</code> | *No description.* |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsStack.property.nodeLocalDns">nodeLocalDns</a></code> | <code>kube10k.constructs.addons.NodeLocalDns</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.stacks.NetworkSecurityAddonsStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="kube10k.stacks.NetworkSecurityAddonsStack.property.account"></a>

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

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="kube10k.stacks.NetworkSecurityAddonsStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="kube10k.stacks.NetworkSecurityAddonsStack.property.availabilityZones"></a>

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

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="kube10k.stacks.NetworkSecurityAddonsStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="kube10k.stacks.NetworkSecurityAddonsStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="kube10k.stacks.NetworkSecurityAddonsStack.property.environment"></a>

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

##### `nested`<sup>Required</sup> <a name="nested" id="kube10k.stacks.NetworkSecurityAddonsStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="kube10k.stacks.NetworkSecurityAddonsStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="kube10k.stacks.NetworkSecurityAddonsStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="kube10k.stacks.NetworkSecurityAddonsStack.property.region"></a>

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

##### `stackId`<sup>Required</sup> <a name="stackId" id="kube10k.stacks.NetworkSecurityAddonsStack.property.stackId"></a>

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

##### `stackName`<sup>Required</sup> <a name="stackName" id="kube10k.stacks.NetworkSecurityAddonsStack.property.stackName"></a>

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

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="kube10k.stacks.NetworkSecurityAddonsStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="kube10k.stacks.NetworkSecurityAddonsStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="kube10k.stacks.NetworkSecurityAddonsStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="kube10k.stacks.NetworkSecurityAddonsStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="kube10k.stacks.NetworkSecurityAddonsStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="kube10k.stacks.NetworkSecurityAddonsStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="kube10k.stacks.NetworkSecurityAddonsStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="kube10k.stacks.NetworkSecurityAddonsStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `coreDns`<sup>Required</sup> <a name="coreDns" id="kube10k.stacks.NetworkSecurityAddonsStack.property.coreDns"></a>

```typescript
public readonly coreDns: CoreDns;
```

- *Type:* kube10k.constructs.addons.CoreDns

---

##### `nodeLocalDns`<sup>Required</sup> <a name="nodeLocalDns" id="kube10k.stacks.NetworkSecurityAddonsStack.property.nodeLocalDns"></a>

```typescript
public readonly nodeLocalDns: NodeLocalDns;
```

- *Type:* kube10k.constructs.addons.NodeLocalDns

---


### RootStack <a name="RootStack" id="kube10k.stacks.RootStack"></a>

#### Initializers <a name="Initializers" id="kube10k.stacks.RootStack.Initializer"></a>

```typescript
import { stacks } from 'kube10k'

new stacks.RootStack(scope: Construct, id: string, props: RootStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.RootStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#kube10k.stacks.RootStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.stacks.RootStack.Initializer.parameter.props">props</a></code> | <code>kube10k.stacks.RootStackProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.stacks.RootStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.stacks.RootStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="kube10k.stacks.RootStack.Initializer.parameter.props"></a>

- *Type:* kube10k.stacks.RootStackProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.stacks.RootStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#kube10k.stacks.RootStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#kube10k.stacks.RootStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#kube10k.stacks.RootStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#kube10k.stacks.RootStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a value. |
| <code><a href="#kube10k.stacks.RootStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#kube10k.stacks.RootStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#kube10k.stacks.RootStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#kube10k.stacks.RootStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#kube10k.stacks.RootStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#kube10k.stacks.RootStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#kube10k.stacks.RootStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#kube10k.stacks.RootStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |

---

##### `toString` <a name="toString" id="kube10k.stacks.RootStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="kube10k.stacks.RootStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="kube10k.stacks.RootStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="kube10k.stacks.RootStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="kube10k.stacks.RootStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="kube10k.stacks.RootStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.stacks.RootStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="kube10k.stacks.RootStack.addTransform"></a>

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


###### `transform`<sup>Required</sup> <a name="transform" id="kube10k.stacks.RootStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportValue` <a name="exportValue" id="kube10k.stacks.RootStack.exportValue"></a>

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

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="kube10k.stacks.RootStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="kube10k.stacks.RootStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="kube10k.stacks.RootStack.formatArn"></a>

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

###### `components`<sup>Required</sup> <a name="components" id="kube10k.stacks.RootStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="kube10k.stacks.RootStack.getLogicalId"></a>

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

###### `element`<sup>Required</sup> <a name="element" id="kube10k.stacks.RootStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="kube10k.stacks.RootStack.regionalFact"></a>

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

###### `factName`<sup>Required</sup> <a name="factName" id="kube10k.stacks.RootStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="kube10k.stacks.RootStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="kube10k.stacks.RootStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="kube10k.stacks.RootStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="kube10k.stacks.RootStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="kube10k.stacks.RootStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="kube10k.stacks.RootStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="kube10k.stacks.RootStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.stacks.RootStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="kube10k.stacks.RootStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="kube10k.stacks.RootStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="kube10k.stacks.RootStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="kube10k.stacks.RootStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.stacks.RootStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="kube10k.stacks.RootStack.toJsonString.parameter.space"></a>

- *Type:* number

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.stacks.RootStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#kube10k.stacks.RootStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#kube10k.stacks.RootStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.stacks.RootStack.isConstruct"></a>

```typescript
import { stacks } from 'kube10k'

stacks.RootStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.RootStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="kube10k.stacks.RootStack.isStack"></a>

```typescript
import { stacks } from 'kube10k'

stacks.RootStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.RootStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="kube10k.stacks.RootStack.of"></a>

```typescript
import { stacks } from 'kube10k'

stacks.RootStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="kube10k.stacks.RootStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.RootStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.stacks.RootStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#kube10k.stacks.RootStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#kube10k.stacks.RootStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#kube10k.stacks.RootStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#kube10k.stacks.RootStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#kube10k.stacks.RootStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#kube10k.stacks.RootStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#kube10k.stacks.RootStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#kube10k.stacks.RootStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#kube10k.stacks.RootStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#kube10k.stacks.RootStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#kube10k.stacks.RootStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#kube10k.stacks.RootStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#kube10k.stacks.RootStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#kube10k.stacks.RootStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#kube10k.stacks.RootStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#kube10k.stacks.RootStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#kube10k.stacks.RootStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#kube10k.stacks.RootStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#kube10k.stacks.RootStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#kube10k.stacks.RootStack.property.clusterName">clusterName</a></code> | <code>string</code> | The name of the kubernetes cluster. |
| <code><a href="#kube10k.stacks.RootStack.property.clusterStack">clusterStack</a></code> | <code>kube10k.stacks.ClusterStack</code> | Access to the {@link ClusterStack} nested stack. |
| <code><a href="#kube10k.stacks.RootStack.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | The Kubernetes cluster version. |
| <code><a href="#kube10k.stacks.RootStack.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which this Cluster was created. |
| <code><a href="#kube10k.stacks.RootStack.property.vpcStack">vpcStack</a></code> | <code>kube10k.stacks.VpcStack</code> | Access to the {@link VpcStack}  nested stack, if it gets created. |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.stacks.RootStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="kube10k.stacks.RootStack.property.account"></a>

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

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="kube10k.stacks.RootStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="kube10k.stacks.RootStack.property.availabilityZones"></a>

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

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="kube10k.stacks.RootStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="kube10k.stacks.RootStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="kube10k.stacks.RootStack.property.environment"></a>

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

##### `nested`<sup>Required</sup> <a name="nested" id="kube10k.stacks.RootStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="kube10k.stacks.RootStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="kube10k.stacks.RootStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="kube10k.stacks.RootStack.property.region"></a>

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

##### `stackId`<sup>Required</sup> <a name="stackId" id="kube10k.stacks.RootStack.property.stackId"></a>

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


##### `stackName`<sup>Required</sup> <a name="stackName" id="kube10k.stacks.RootStack.property.stackName"></a>

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

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="kube10k.stacks.RootStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="kube10k.stacks.RootStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="kube10k.stacks.RootStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="kube10k.stacks.RootStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="kube10k.stacks.RootStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="kube10k.stacks.RootStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="kube10k.stacks.RootStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="kube10k.stacks.RootStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="kube10k.stacks.RootStack.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The name of the kubernetes cluster.

---

##### `clusterStack`<sup>Required</sup> <a name="clusterStack" id="kube10k.stacks.RootStack.property.clusterStack"></a>

```typescript
public readonly clusterStack: ClusterStack;
```

- *Type:* kube10k.stacks.ClusterStack

Access to the {@link ClusterStack} nested stack.

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="kube10k.stacks.RootStack.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

The Kubernetes cluster version.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="kube10k.stacks.RootStack.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC in which this Cluster was created.

---

##### `vpcStack`<sup>Optional</sup> <a name="vpcStack" id="kube10k.stacks.RootStack.property.vpcStack"></a>

```typescript
public readonly vpcStack: VpcStack;
```

- *Type:* kube10k.stacks.VpcStack

Access to the {@link VpcStack}  nested stack, if it gets created.

---


### VpcStack <a name="VpcStack" id="kube10k.stacks.VpcStack"></a>

#### Initializers <a name="Initializers" id="kube10k.stacks.VpcStack.Initializer"></a>

```typescript
import { stacks } from 'kube10k'

new stacks.VpcStack(scope: Construct, id: string, props?: VpcStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.VpcStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#kube10k.stacks.VpcStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#kube10k.stacks.VpcStack.Initializer.parameter.props">props</a></code> | <code>kube10k.stacks.VpcStackProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="kube10k.stacks.VpcStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="kube10k.stacks.VpcStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="kube10k.stacks.VpcStack.Initializer.parameter.props"></a>

- *Type:* kube10k.stacks.VpcStackProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.stacks.VpcStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#kube10k.stacks.VpcStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#kube10k.stacks.VpcStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#kube10k.stacks.VpcStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#kube10k.stacks.VpcStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a value. |
| <code><a href="#kube10k.stacks.VpcStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#kube10k.stacks.VpcStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#kube10k.stacks.VpcStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#kube10k.stacks.VpcStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#kube10k.stacks.VpcStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#kube10k.stacks.VpcStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#kube10k.stacks.VpcStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#kube10k.stacks.VpcStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#kube10k.stacks.VpcStack.setParameter">setParameter</a></code> | Assign a value to one of the nested stack parameters. |

---

##### `toString` <a name="toString" id="kube10k.stacks.VpcStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="kube10k.stacks.VpcStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="kube10k.stacks.VpcStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="kube10k.stacks.VpcStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="kube10k.stacks.VpcStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="kube10k.stacks.VpcStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.stacks.VpcStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="kube10k.stacks.VpcStack.addTransform"></a>

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


###### `transform`<sup>Required</sup> <a name="transform" id="kube10k.stacks.VpcStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportValue` <a name="exportValue" id="kube10k.stacks.VpcStack.exportValue"></a>

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

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="kube10k.stacks.VpcStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="kube10k.stacks.VpcStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="kube10k.stacks.VpcStack.formatArn"></a>

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

###### `components`<sup>Required</sup> <a name="components" id="kube10k.stacks.VpcStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="kube10k.stacks.VpcStack.getLogicalId"></a>

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

###### `element`<sup>Required</sup> <a name="element" id="kube10k.stacks.VpcStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="kube10k.stacks.VpcStack.regionalFact"></a>

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

###### `factName`<sup>Required</sup> <a name="factName" id="kube10k.stacks.VpcStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="kube10k.stacks.VpcStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="kube10k.stacks.VpcStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="kube10k.stacks.VpcStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="kube10k.stacks.VpcStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="kube10k.stacks.VpcStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="kube10k.stacks.VpcStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="kube10k.stacks.VpcStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.stacks.VpcStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="kube10k.stacks.VpcStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="kube10k.stacks.VpcStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="kube10k.stacks.VpcStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="kube10k.stacks.VpcStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="kube10k.stacks.VpcStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="kube10k.stacks.VpcStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `setParameter` <a name="setParameter" id="kube10k.stacks.VpcStack.setParameter"></a>

```typescript
public setParameter(name: string, value: string): void
```

Assign a value to one of the nested stack parameters.

###### `name`<sup>Required</sup> <a name="name" id="kube10k.stacks.VpcStack.setParameter.parameter.name"></a>

- *Type:* string

The parameter name (ID).

---

###### `value`<sup>Required</sup> <a name="value" id="kube10k.stacks.VpcStack.setParameter.parameter.value"></a>

- *Type:* string

The value to assign.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#kube10k.stacks.VpcStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#kube10k.stacks.VpcStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#kube10k.stacks.VpcStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#kube10k.stacks.VpcStack.isNestedStack">isNestedStack</a></code> | Checks if `x` is an object of type `NestedStack`. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="kube10k.stacks.VpcStack.isConstruct"></a>

```typescript
import { stacks } from 'kube10k'

stacks.VpcStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.VpcStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="kube10k.stacks.VpcStack.isStack"></a>

```typescript
import { stacks } from 'kube10k'

stacks.VpcStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.VpcStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="kube10k.stacks.VpcStack.of"></a>

```typescript
import { stacks } from 'kube10k'

stacks.VpcStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="kube10k.stacks.VpcStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `isNestedStack` <a name="isNestedStack" id="kube10k.stacks.VpcStack.isNestedStack"></a>

```typescript
import { stacks } from 'kube10k'

stacks.VpcStack.isNestedStack(x: any)
```

Checks if `x` is an object of type `NestedStack`.

###### `x`<sup>Required</sup> <a name="x" id="kube10k.stacks.VpcStack.isNestedStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.VpcStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#kube10k.stacks.VpcStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#kube10k.stacks.VpcStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#kube10k.stacks.VpcStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#kube10k.stacks.VpcStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#kube10k.stacks.VpcStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#kube10k.stacks.VpcStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#kube10k.stacks.VpcStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#kube10k.stacks.VpcStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#kube10k.stacks.VpcStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#kube10k.stacks.VpcStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#kube10k.stacks.VpcStack.property.stackId">stackId</a></code> | <code>string</code> | An attribute that represents the ID of the stack. |
| <code><a href="#kube10k.stacks.VpcStack.property.stackName">stackName</a></code> | <code>string</code> | An attribute that represents the name of the nested stack. |
| <code><a href="#kube10k.stacks.VpcStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#kube10k.stacks.VpcStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#kube10k.stacks.VpcStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#kube10k.stacks.VpcStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#kube10k.stacks.VpcStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#kube10k.stacks.VpcStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#kube10k.stacks.VpcStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#kube10k.stacks.VpcStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#kube10k.stacks.VpcStack.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which this Cluster was created. |

---

##### `node`<sup>Required</sup> <a name="node" id="kube10k.stacks.VpcStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="kube10k.stacks.VpcStack.property.account"></a>

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

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="kube10k.stacks.VpcStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="kube10k.stacks.VpcStack.property.availabilityZones"></a>

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

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="kube10k.stacks.VpcStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="kube10k.stacks.VpcStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="kube10k.stacks.VpcStack.property.environment"></a>

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

##### `nested`<sup>Required</sup> <a name="nested" id="kube10k.stacks.VpcStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="kube10k.stacks.VpcStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="kube10k.stacks.VpcStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="kube10k.stacks.VpcStack.property.region"></a>

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

##### `stackId`<sup>Required</sup> <a name="stackId" id="kube10k.stacks.VpcStack.property.stackId"></a>

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

##### `stackName`<sup>Required</sup> <a name="stackName" id="kube10k.stacks.VpcStack.property.stackName"></a>

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

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="kube10k.stacks.VpcStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="kube10k.stacks.VpcStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="kube10k.stacks.VpcStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="kube10k.stacks.VpcStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="kube10k.stacks.VpcStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="kube10k.stacks.VpcStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="kube10k.stacks.VpcStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="kube10k.stacks.VpcStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="kube10k.stacks.VpcStack.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC in which this Cluster was created.

---


## Structs <a name="Structs" id="Structs"></a>

### ClusterStackProps <a name="ClusterStackProps" id="kube10k.stacks.ClusterStackProps"></a>

#### Initializer <a name="Initializer" id="kube10k.stacks.ClusterStackProps.Initializer"></a>

```typescript
import { stacks } from 'kube10k'

const clusterStackProps: stacks.ClusterStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.ClusterStackProps.property.clusterName">clusterName</a></code> | <code>string</code> | clusterName is the desired name for the EKS Cluster. |
| <code><a href="#kube10k.stacks.ClusterStackProps.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | kubernetesVersion is the target version for the EKS cluster. |
| <code><a href="#kube10k.stacks.ClusterStackProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC represents an already existing VPC that we will put the cluster into. |
| <code><a href="#kube10k.stacks.ClusterStackProps.property.optionalClusterStackProps">optionalClusterStackProps</a></code> | <code>kube10k.stacks.OptionalClusterStackProps</code> | Optional User-Customizable Parameters. |

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

### ControllerAddonsProps <a name="ControllerAddonsProps" id="kube10k.stacks.ControllerAddonsProps"></a>

#### Initializer <a name="Initializer" id="kube10k.stacks.ControllerAddonsProps.Initializer"></a>

```typescript
import { stacks } from 'kube10k'

const controllerAddonsProps: stacks.ControllerAddonsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.ControllerAddonsProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.ICluster</code> | *No description.* |
| <code><a href="#kube10k.stacks.ControllerAddonsProps.property.kubernetesVersion">kubernetesVersion</a></code> | <code>aws-cdk-lib.aws_eks.KubernetesVersion</code> | *No description.* |
| <code><a href="#kube10k.stacks.ControllerAddonsProps.property.nodeTaint">nodeTaint</a></code> | <code>kube10k.constructs.k8s.NodeTaint</code> | *No description.* |
| <code><a href="#kube10k.stacks.ControllerAddonsProps.property.oidcIrsa">oidcIrsa</a></code> | <code>kube10k.constructs.k8s.OidcIrsa</code> | Used for setting up Role<->ServiceAccount mappings. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="kube10k.stacks.ControllerAddonsProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_eks.ICluster

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="kube10k.stacks.ControllerAddonsProps.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: KubernetesVersion;
```

- *Type:* aws-cdk-lib.aws_eks.KubernetesVersion

---

##### `nodeTaint`<sup>Required</sup> <a name="nodeTaint" id="kube10k.stacks.ControllerAddonsProps.property.nodeTaint"></a>

```typescript
public readonly nodeTaint: NodeTaint;
```

- *Type:* kube10k.constructs.k8s.NodeTaint

---

##### `oidcIrsa`<sup>Required</sup> <a name="oidcIrsa" id="kube10k.stacks.ControllerAddonsProps.property.oidcIrsa"></a>

```typescript
public readonly oidcIrsa: OidcIrsa;
```

- *Type:* kube10k.constructs.k8s.OidcIrsa

Used for setting up Role<->ServiceAccount mappings.

---

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

### NetworkSecurityAddonsProps <a name="NetworkSecurityAddonsProps" id="kube10k.stacks.NetworkSecurityAddonsProps"></a>

#### Initializer <a name="Initializer" id="kube10k.stacks.NetworkSecurityAddonsProps.Initializer"></a>

```typescript
import { stacks } from 'kube10k'

const networkSecurityAddonsProps: stacks.NetworkSecurityAddonsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.ICluster</code> | *No description.* |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsProps.property.kubernetesVersion">kubernetesVersion</a></code> | <code>aws-cdk-lib.aws_eks.KubernetesVersion</code> | *No description.* |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsProps.property.nodeTaint">nodeTaint</a></code> | <code>kube10k.constructs.k8s.NodeTaint</code> | *No description.* |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsProps.property.oidcIrsa">oidcIrsa</a></code> | <code>kube10k.constructs.k8s.OidcIrsa</code> | Used for setting up Role<->ServiceAccount mappings. |
| <code><a href="#kube10k.stacks.NetworkSecurityAddonsProps.property.podSecurityProps">podSecurityProps</a></code> | <code>kube10k.constructs.addons.OptionalPodSecurityPolicyProps</code> | Customizable access to tweak the {@link PodSecurityPolicy} addon construct. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="kube10k.stacks.NetworkSecurityAddonsProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_eks.ICluster

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="kube10k.stacks.NetworkSecurityAddonsProps.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: KubernetesVersion;
```

- *Type:* aws-cdk-lib.aws_eks.KubernetesVersion

---

##### `nodeTaint`<sup>Required</sup> <a name="nodeTaint" id="kube10k.stacks.NetworkSecurityAddonsProps.property.nodeTaint"></a>

```typescript
public readonly nodeTaint: NodeTaint;
```

- *Type:* kube10k.constructs.k8s.NodeTaint

---

##### `oidcIrsa`<sup>Required</sup> <a name="oidcIrsa" id="kube10k.stacks.NetworkSecurityAddonsProps.property.oidcIrsa"></a>

```typescript
public readonly oidcIrsa: OidcIrsa;
```

- *Type:* kube10k.constructs.k8s.OidcIrsa

Used for setting up Role<->ServiceAccount mappings.

---

##### `podSecurityProps`<sup>Optional</sup> <a name="podSecurityProps" id="kube10k.stacks.NetworkSecurityAddonsProps.property.podSecurityProps"></a>

```typescript
public readonly podSecurityProps: OptionalPodSecurityPolicyProps;
```

- *Type:* kube10k.constructs.addons.OptionalPodSecurityPolicyProps

Customizable access to tweak the {@link PodSecurityPolicy} addon construct.

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

### RootStackProps <a name="RootStackProps" id="kube10k.stacks.RootStackProps"></a>

#### Initializer <a name="Initializer" id="kube10k.stacks.RootStackProps.Initializer"></a>

```typescript
import { stacks } from 'kube10k'

const rootStackProps: stacks.RootStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.RootStackProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#kube10k.stacks.RootStackProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#kube10k.stacks.RootStackProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#kube10k.stacks.RootStackProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#kube10k.stacks.RootStackProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#kube10k.stacks.RootStackProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#kube10k.stacks.RootStackProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#kube10k.stacks.RootStackProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#kube10k.stacks.RootStackProps.property.clusterName">clusterName</a></code> | <code>string</code> | Name of the cluster. |
| <code><a href="#kube10k.stacks.RootStackProps.property.clusterStackProps">clusterStackProps</a></code> | <code>kube10k.stacks.OptionalClusterStackProps</code> | clusterStackProps provides direct access to customize the Kubernetes cluster beyond the standard top level settings within this RootStackProps resource. |
| <code><a href="#kube10k.stacks.RootStackProps.property.commonTags">commonTags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | CommonTags are a set of CfnTag resources that will be added to every resource created within these stacks. |
| <code><a href="#kube10k.stacks.RootStackProps.property.defaultWorkloadSubnetProps">defaultWorkloadSubnetProps</a></code> | <code>kube10k.constructs.k8s.OptionalWorkloadSubnetProps</code> | Allows customizing the default workload subnet props. |
| <code><a href="#kube10k.stacks.RootStackProps.property.existingVpcId">existingVpcId</a></code> | <code>string</code> | ExistingVpcId is an optional parameter that will prevent the stack from creating its own VPC, but instead will use a pre-existing VPC. |
| <code><a href="#kube10k.stacks.RootStackProps.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | KubernetesVersion is the desired Kubernetes Version. See. |
| <code><a href="#kube10k.stacks.RootStackProps.property.nodeKubernetesVersion">nodeKubernetesVersion</a></code> | <code>string</code> | Optional override that allows setting the NodeVersion to something older than the cluster version during upgrades. |
| <code><a href="#kube10k.stacks.RootStackProps.property.podSecurityPolicy">podSecurityPolicy</a></code> | <code>kube10k.constructs.addons.OptionalPodSecurityPolicyProps</code> | Customized parameters for the {@link PodSecurityPolicy} addon stack. |
| <code><a href="#kube10k.stacks.RootStackProps.property.systemNodesProps">systemNodesProps</a></code> | <code>kube10k.constructs.k8s.OptionalManagedNodeGroupProps</code> | Customized parameters for the "System" nodes group - this allows customizing the default node sizes, counts, etc. |
| <code><a href="#kube10k.stacks.RootStackProps.property.systemNodesTaint">systemNodesTaint</a></code> | <code>kube10k.constructs.k8s.NodeTaint</code> | systemNodesIsolation defines the node labels and taints that will used to isolate the "System" nodes from other normal workloads. |
| <code><a href="#kube10k.stacks.RootStackProps.property.vpcStackProps">vpcStackProps</a></code> | <code>kube10k.stacks.VpcStackProps</code> | VpcStackProps provides direct access to customize the nested VPC Stack. |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="kube10k.stacks.RootStackProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="kube10k.stacks.RootStackProps.property.crossRegionReferences"></a>

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

##### `description`<sup>Optional</sup> <a name="description" id="kube10k.stacks.RootStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="kube10k.stacks.RootStackProps.property.env"></a>

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


##### `stackName`<sup>Optional</sup> <a name="stackName" id="kube10k.stacks.RootStackProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="kube10k.stacks.RootStackProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* `DefaultStackSynthesizer` if the `@aws-cdk/core:newStyleStackSynthesis` feature flag is set, `LegacyStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="kube10k.stacks.RootStackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="kube10k.stacks.RootStackProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="kube10k.stacks.RootStackProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Name of the cluster.

---

##### `clusterStackProps`<sup>Optional</sup> <a name="clusterStackProps" id="kube10k.stacks.RootStackProps.property.clusterStackProps"></a>

```typescript
public readonly clusterStackProps: OptionalClusterStackProps;
```

- *Type:* kube10k.stacks.OptionalClusterStackProps

clusterStackProps provides direct access to customize the Kubernetes cluster beyond the standard top level settings within this RootStackProps resource.

---

##### `commonTags`<sup>Optional</sup> <a name="commonTags" id="kube10k.stacks.RootStackProps.property.commonTags"></a>

```typescript
public readonly commonTags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

CommonTags are a set of CfnTag resources that will be added to every resource created within these stacks.

This is how you customize the tagging
behavior of the resources for your own environment.

NOTE: Tags are only applied to the EKS Cluster at the time of creation per
https://github.com/aws/aws-cdk/issues/19388#issuecomment-1268870426.

---

##### `defaultWorkloadSubnetProps`<sup>Optional</sup> <a name="defaultWorkloadSubnetProps" id="kube10k.stacks.RootStackProps.property.defaultWorkloadSubnetProps"></a>

```typescript
public readonly defaultWorkloadSubnetProps: OptionalWorkloadSubnetProps;
```

- *Type:* kube10k.constructs.k8s.OptionalWorkloadSubnetProps

Allows customizing the default workload subnet props.

---

##### `existingVpcId`<sup>Optional</sup> <a name="existingVpcId" id="kube10k.stacks.RootStackProps.property.existingVpcId"></a>

```typescript
public readonly existingVpcId: string;
```

- *Type:* string

ExistingVpcId is an optional parameter that will prevent the stack from creating its own VPC, but instead will use a pre-existing VPC.

When you
bring your own VPC, this stack will still attach to that VPC a dedicated
Pod IP range (see VpcStackProps.PodCIDR) and create dedicated subnets and
security groups for those pods.

---

##### `kubernetesVersion`<sup>Optional</sup> <a name="kubernetesVersion" id="kube10k.stacks.RootStackProps.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

KubernetesVersion is the desired Kubernetes Version. See.

https://docs.aws.amazon.com/eks/latest/userguide/kubernetes-versions.html for details.

---

##### `nodeKubernetesVersion`<sup>Optional</sup> <a name="nodeKubernetesVersion" id="kube10k.stacks.RootStackProps.property.nodeKubernetesVersion"></a>

```typescript
public readonly nodeKubernetesVersion: string;
```

- *Type:* string

Optional override that allows setting the NodeVersion to something older than the cluster version during upgrades.

---

##### `podSecurityPolicy`<sup>Optional</sup> <a name="podSecurityPolicy" id="kube10k.stacks.RootStackProps.property.podSecurityPolicy"></a>

```typescript
public readonly podSecurityPolicy: OptionalPodSecurityPolicyProps;
```

- *Type:* kube10k.constructs.addons.OptionalPodSecurityPolicyProps

Customized parameters for the {@link PodSecurityPolicy} addon stack.

---

##### `systemNodesProps`<sup>Optional</sup> <a name="systemNodesProps" id="kube10k.stacks.RootStackProps.property.systemNodesProps"></a>

```typescript
public readonly systemNodesProps: OptionalManagedNodeGroupProps;
```

- *Type:* kube10k.constructs.k8s.OptionalManagedNodeGroupProps

Customized parameters for the "System" nodes group - this allows customizing the default node sizes, counts, etc.

---

##### `systemNodesTaint`<sup>Optional</sup> <a name="systemNodesTaint" id="kube10k.stacks.RootStackProps.property.systemNodesTaint"></a>

```typescript
public readonly systemNodesTaint: NodeTaint;
```

- *Type:* kube10k.constructs.k8s.NodeTaint

systemNodesIsolation defines the node labels and taints that will used to isolate the "System" nodes from other normal workloads.

---

##### `vpcStackProps`<sup>Optional</sup> <a name="vpcStackProps" id="kube10k.stacks.RootStackProps.property.vpcStackProps"></a>

```typescript
public readonly vpcStackProps: VpcStackProps;
```

- *Type:* kube10k.stacks.VpcStackProps

VpcStackProps provides direct access to customize the nested VPC Stack.

---

### VpcStackProps <a name="VpcStackProps" id="kube10k.stacks.VpcStackProps"></a>

#### Initializer <a name="Initializer" id="kube10k.stacks.VpcStackProps.Initializer"></a>

```typescript
import { stacks } from 'kube10k'

const vpcStackProps: stacks.VpcStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#kube10k.stacks.VpcStackProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#kube10k.stacks.VpcStackProps.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | The Simple Notification Service (SNS) topics to publish stack related events. |
| <code><a href="#kube10k.stacks.VpcStackProps.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | The set value pairs that represent the parameters passed to CloudFormation when this nested stack is created. |
| <code><a href="#kube10k.stacks.VpcStackProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the nested stack is removed. |
| <code><a href="#kube10k.stacks.VpcStackProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The length of time that CloudFormation waits for the nested stack to reach the CREATE_COMPLETE state. |
| <code><a href="#kube10k.stacks.VpcStackProps.property.vpcProps">vpcProps</a></code> | <code>kube10k.constructs.network.vpc.VpcProps</code> | vpcProps provides direct access to customize the nested VPC Stack. |

---

##### `description`<sup>Optional</sup> <a name="description" id="kube10k.stacks.VpcStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="kube10k.stacks.VpcStackProps.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]
- *Default:* notifications are not sent for this stack.

The Simple Notification Service (SNS) topics to publish stack related events.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="kube10k.stacks.VpcStackProps.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no user-defined parameters are passed to the nested stack

The set value pairs that represent the parameters passed to CloudFormation when this nested stack is created.

Each parameter has a name corresponding
to a parameter defined in the embedded template and a value representing
the value that you want to set for the parameter.

The nested stack construct will automatically synthesize parameters in order
to bind references from the parent stack(s) into the nested stack.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="kube10k.stacks.VpcStackProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.DESTROY

Policy to apply when the nested stack is removed.

The default is `Destroy`, because all Removal Policies of resources inside the
Nested Stack should already have been set correctly. You normally should
not need to set this value.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="kube10k.stacks.VpcStackProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* no timeout

The length of time that CloudFormation waits for the nested stack to reach the CREATE_COMPLETE state.

When CloudFormation detects that the nested stack has reached the
CREATE_COMPLETE state, it marks the nested stack resource as
CREATE_COMPLETE in the parent stack and resumes creating the parent stack.
If the timeout period expires before the nested stack reaches
CREATE_COMPLETE, CloudFormation marks the nested stack as failed and rolls
back both the nested stack and parent stack.

---

##### `vpcProps`<sup>Optional</sup> <a name="vpcProps" id="kube10k.stacks.VpcStackProps.property.vpcProps"></a>

```typescript
public readonly vpcProps: VpcProps;
```

- *Type:* kube10k.constructs.network.vpc.VpcProps

vpcProps provides direct access to customize the nested VPC Stack.

---



