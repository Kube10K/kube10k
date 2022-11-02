import * as cdk from 'aws-cdk-lib';
import { IVpc } from 'aws-cdk-lib/aws-ec2';
import { KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { PolicyStatement, Role } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { Kube10kCluster } from '../constructs/k8s/cluster';
import { OidcIrsa } from '../constructs/k8s/oidc-isra';
import { ClusterRoles } from '../constructs/k8s/roles';
import { ClusterSecurityGroups } from '../constructs/k8s/securitygroups';

export interface OptionalClusterStackProps extends cdk.NestedStackProps {
  /**
   * CommonTags are a set of CfnTag resources that will be added ultimately to the EKS cluster, if the cluster is
   * provisioned by this stack (as opposed to the "bring your own cluster" model).
   *
   * NOTE: https://github.com/aws/aws-cdk/issues/19388#issuecomment-1268870426 prevents tags from being updated after
   * initial creation of the EKS cluster.
   */
  readonly commonTags?: cdk.CfnTag[];

  /**
   * NodeRolePolicyStatement is an optional list of awsiam.PolicyStatement resources used to customize the permissions
   * that the individual EC2 nodes in the cluster have. This can be useful when you want to craft specific ECR
   * permissions for example.
   */
  readonly nodeRolePolicyStatement?: PolicyStatement[];

  /**
   * existingMasterRole is the short role name to an already existing AWS IAM
   * Role that will be granted "system:master"s access into the cluster.
   */
  readonly existingMasterRole?: string;

  /**
   * roleMappings is a map of key/value pairs that will be used to map existing
   * IAM Roles to internal Kubernetes groups. This list of mappings is how you
   * provide access to th cluster through IAM Roles ... but OIDC-based
   * authentication is the recommended approach (through Google, Okta, etc).
   *
   *   roleMappings: {
   *     "myIamRole": "system:masters",
   *   }
   *
   */
  readonly roleMappings?: { [id: string]: string };

  /**
   * serviceIPv4Cidr is the "Service IP range" that will be used by the cluster
   * when creating internal services. The default is 172.20.0.0/16 and should be
   * fine for most cases.
   */
  readonly serviceIPv4Cidr?: string;
}

export interface ClusterStackProps extends OptionalClusterStackProps {
  /**
   * clusterName is the desired name for the EKS Cluster.
   */
  readonly clusterName: string;

  /**
   * kubernetesVersion is the target version for the EKS cluster.
   */
  readonly kubernetesVersion: string;

  /**
   * VPC represents an already existing VPC that we will put the cluster into
   */
  readonly vpc: IVpc;
}

export class ClusterStack extends cdk.NestedStack {
  /**
   * The VPC in which this Cluster was created
   */
  public readonly vpc: IVpc;

  /**
   * Provides access to the {@link ClusterRoles} construct created in this stack
   * for the cluster. Used to get access to the `NodeRole` mostly.
   */
  public readonly clusterRoles: ClusterRoles;

  /**
   * Provides access to the {@link ClusterSecurityGroups} construct which
   * contains references to the `NodeSecurityGroup`, `PodSecurityGroup` and
   * `ControlPlaneSecurityGroup`.
   */
  public readonly clusterSecurityGroups: ClusterSecurityGroups;

  /**
   * Provides direct access to the {@link Kube10kCluster} resource - the aws-cdk
   * Layer3 construct used to create the cluster itself.
   */
  public readonly cluster: Kube10kCluster;

  /**
   * Provides access to the {@link OidcIrsa} construct. This construct is used
   * to help create TrustPolicy documents for {@link Role} resources which are
   * used by `ServiceAccounts` within the cluster.
   */
  public readonly oidcIrsa: OidcIrsa;

  constructor(scope: Construct, id: string, props: ClusterStackProps) {
    super(scope, id);

    /**
     * Create the common IAM Roles. The EKS-native "aws-cdk.Cluster" resource
     * can create its own IAM roles, but they are not as narrowly scoped as
     * ours. Additionally we provide functionality here for customizing the
     * roles.
     */
    this.clusterRoles = new ClusterRoles(this, 'ClusterRoles', {
      nodeRolePolicyStatement: props?.nodeRolePolicyStatement,
      existingMasterRole: props?.existingMasterRole
    });

    /**
     * Prepare the VPC by creating dedicated Security Groups for the Nodes and
     * Control Plane.
     */
    this.vpc = props.vpc;
    this.clusterSecurityGroups = new ClusterSecurityGroups(this, 'ClusterNetworkPrep', { vpc: props.vpc });

    /**
     * Create the EKS CdkCluster through the "EKS Construct" library:
     *   https://docs.aws.amazon.com/cdk/api/v1/docs/aws-eks-readme.html
     *
     * This construct resolves a number of problems with the way EKS clusters are created - namely that
     * EKS clusters are initially created with access granted into them by the IAM Principal that made
     * the 'eks:CreateCluster' API call.
     *
     * If we were to use the standard 'awseks.CfnCluster' resource/ (which maps to 'AWS::EKS::CdkCluster'),
     * then the "cdk-exec-..." role would be the owner of the cluster. The problem is that by default that
     * role cannot be assumed by Lambda to make future changes to the cluster (like creating the "aws-auth")
     * map.
     *
     * The 'awseks.NewCluster' construct creates a whole series of Lambda functions and IAM roles that are used
     * together to create the cluster and then provide cloudformation-based access to manage the internals
     * of the cluster. The up-side of doing it this way is that you can completely create the cluster and manage
     * the clusters resources all within the same stack. The only downside is that we are not taking advantage
     * of the 'AWS::EKS::CdkCluster' resource, and instead are effectively making the 'eks:CreateCluster' API call
     * ourselves through a Lambda.
     */
    this.cluster = new Kube10kCluster(this, 'Cluster', {
      clusterName: props.clusterName,
      kubernetesVersion: KubernetesVersion.of(props.kubernetesVersion),
      clusterSecurityGroups: this.clusterSecurityGroups,
      clusterRoles: this.clusterRoles
    });

    /**
     * Dependency ordering ... make sure during a tear-down that the cluster is
     * fully torn down before we try to tear down things like Security Groups.
     */
    this.cluster.node.addDependency(this.clusterRoles);
    this.cluster.node.addDependency(this.clusterSecurityGroups);

    /**
     * Configure OpenID IRSA (ServiceAccount <-> IAM Role) mapping in the
     * cluster, and store the {@link OidcIrsa} construct so it can be used to
     * generate IAM role assume policies later by other constructs.
     */
    this.oidcIrsa = new OidcIrsa(this, 'OIDC-Irsa', {
      cluster: this.cluster.cluster
    });
    this.oidcIrsa.node.addDependency(this.cluster);

    /**
     * Iterate over the RoleMappings and create an aws-auth configmap entry for
     * each one. Note, this expects and verifies that the IAM Role exists before
     * it will create the configuration.
     */
    for (let id in props.roleMappings) {
      let value: string = props.roleMappings[id];
      let discoveredRole = Role.fromRoleName(this, 'AwsAuth-' + id, id, { mutable: false });
      this.cluster.awsAuth.addRoleMapping(discoveredRole, {
        username: discoveredRole.roleName + ':{{SessionName}}',
        groups: [value]
      });
    }
  }
}
