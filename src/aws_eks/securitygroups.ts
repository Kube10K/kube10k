import * as cdk from "aws-cdk-lib";
import { ISecurityGroup, IVpc, Port, SecurityGroup } from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";

export interface ClusterNetworkProps {
  /**
   * Reference to the {@link Vpc} in which the EKS cluster is being created.
   */
  readonly vpc: IVpc;
}

export class ClusterSecurityGroups extends Construct {
  /**
   * Access to the Control Plane {@link ISecurityGroup} resource
   */
  public readonly controlPlaneSecurityGroup: ISecurityGroup;

  /**
   * Access to the Node {@link ISecurityGroup} resource
   */
  public readonly nodeSecurityGroup: ISecurityGroup;

  /**
   * Access to the {@link IVpc} in which the {@link SecurityGroup} resources
   * were created
   */
  public readonly vpc: IVpc;

  constructor(scope: cdk.Stack, id: string, props: ClusterNetworkProps) {
    super(scope, id);
    this.vpc = props.vpc;

    /**
     * This security group is passed into the EKS "eks:CreateCluster" API call
     * and is used by the EKS Control Plane ENIs to access the EC2 hsots within
     * the cluster.
     */
    this.controlPlaneSecurityGroup = new SecurityGroup(
      this,
      "ControlPlaneSecurityGroup",
      {
        // By explicitly naming this resource, we prevent any stack action that
        // would cause the resource to be recreated. This is a useful safeguard
        // against accidental changes that would try to destroy a live security
        // group that is actively in use.
        securityGroupName: cdk.Fn.join("/", [scope.stackName, "ControlPlane"]),

        description: cdk.Fn.join("/", [scope.stackName, "ControlPlane"]),
        vpc: this.vpc,
        allowAllOutbound: false,
        disableInlineRules: false,
      }
    );

    /**
     * This security group is used by the nodes within the EKS cluster to talk
     * to each other, as well as to grant the Cluster ENIs (via the
     * ClusterSecurityGroup) access to the nodes to manage their workloads.
     */

    this.nodeSecurityGroup = new SecurityGroup(this, "NodeSecurityGroup", {
      // By explicitly naming this resource, we prevent any stack action that
      // would cause the resource to be recreated. This is a useful safeguard
      // against accidental changes that would try to destroy a live security
      // group that is actively in use.
      securityGroupName: cdk.Fn.join("/", [scope.stackName, "Nodes"]),
      description: cdk.Fn.join("/", [scope.stackName, "Nodes"]),
      vpc: this.vpc,
      allowAllOutbound: true,
      disableInlineRules: false,
    });

    /**
     * "Control Plane Security Group" Table, "Minimum inbound traffic"
     *
     * This allows the EKS Nodes to hit the Control Plane IP address inside
     * the VPC. More importantly, this is used by the Kubernetes machines to
     * route traffic from a fake-IP of 172.20.0.1 to the control plane, so
     * that various services can start up.
     */
    this.controlPlaneSecurityGroup.addIngressRule(
      this.nodeSecurityGroup,
      Port.tcp(443),
      "Node Access to Control Plane Services",
      false
    );

    /**
     * "Worker Node Security Groups" Table, "Recommended inbound traffic (from control plane)"
     */
    this.nodeSecurityGroup.addIngressRule(
      this.controlPlaneSecurityGroup,
      Port.tcpRange(1024, 65535),
      "Control Plane acces to Nodes",
      false
    );

    /**
     * *Additional Security Policy*
     *
     * When we add in cluster tools like Admission Webhook Controllers, the
     * webhook controllers have their own (reasonable) ideas that they run on
     * port 443. When the API-server needs to reach out to them, it needs
     * access on port 443 to the nodes (and the ENIs on those nodes).
     *
     */
    this.nodeSecurityGroup.addIngressRule(
      this.controlPlaneSecurityGroup,
      Port.tcp(443),
      "Control Plane Webhook Access to Nodes",
      false
    );

    /**
     * "Worker Node Security Groups" Table, "Recommended inbound traffic"
     *
     * This is needed in CNI networking mode because the PODs are not using
     * some private overlay network but instead are really talking to
     * eachother on the VPC subnets. Without this even simple things like DNS
     * break.
     */
    this.nodeSecurityGroup.addIngressRule(
      this.nodeSecurityGroup,
      Port.allTraffic(),
      "Node to Node Traffic is wide open",
      false
    );
  }
}
