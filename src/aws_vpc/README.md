<!-- @format -->

[corevpc]: corevpc.ts
[stacks]: stacks.ts
[constructs]: https://docs.aws.amazon.com/cdk/v2/guide/constructs.html#constructs_using
[privatelink]: https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html

# [`CoreVpc`][corevpc] Construct

The [`CoreVpc`][corevpc] construct is a [L2 Construct][constructs] that provides a clean, large VPC with both "private"
and "public" subnets. While the intended focus of this VPC is for the Kubernetes clusters defined in this library, the
VPC is generic enough that it can be used for any purpose.

## Design Decisions

### Common, large IP Space

The default behavior of the `CoreVpc` construct is to create a very large `100.64.0.0/16` (65,355 IPs) CIDR range and
use the majority of that space for the "private" subnets. The expected behavior is that this VPC is specifically built
for a dedicated workload (like a Kubernetes cluster), and therefore it's IP CIDR range can overlap with other VPCs in
your environment.

**What about Cluster-to-Cluster Communication?**

While more expensive, it is recommended that you connect clusters to each other via public IP addresses and a service
mesh like Istio. Routing access through a mesh (or something like one) provides a variety of security controls that
should be in place for any large scale cluster.

**What about Cluster-to-Existing-Resource Communication?**

If you have existing resources in VPCs to communicate with, we recommend using [VPC PrivateLink][privatelink] to the
specific VPCs and services that you need. Again, there is a cost to this from a network traffic perspective, but
it is far more secure to do this.

# Stack: [`CoreVpcStack`][stacks]

# Stack: [`NestedCoreVpcStack`][stacks]
