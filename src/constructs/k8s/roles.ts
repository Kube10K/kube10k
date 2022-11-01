import * as cdk from 'aws-cdk-lib';
import {
  AccountRootPrincipal,
  CompositePrincipal,
  IRole,
  ManagedPolicy,
  PolicyStatement,
  Role,
  ServicePrincipal
} from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export interface ClusterRolesProps extends cdk.ResourceProps {
  /**
   * NodeRolePolicyStatement is an optional list of awsiam.PolicyStatement
   * resources used to customize the permissions that the individual EC2 nodes
   * in the cluster have. This can be useful when you want to craft specific ECR
   * permissions for example.
   */
  readonly nodeRolePolicyStatement?: PolicyStatement[];

  /**
   * ExistingMasterRole is an optional string that will prevent the creation of
   * a new dedicated MasterRole for the cluster and instead use an existing
   * role.
   */
  readonly existingMasterRole?: string;
}

export class ClusterRoles extends Construct {
  /**
   * Provides access to the Node Role that should be assigned to EC2 nodes that
   * join the cluster.
   */
  public readonly nodeRole: IRole;

  /**
   * Provides access to the Master Role that will be granted privileges into the
   * final Kubernetes cluster that is created.
   */
  public readonly masterRole: IRole;

  /**
   * Provides access to the Cluster Control Plane role that the cluster will use.
   */
  public readonly clusterRole: IRole;

  constructor(scope: cdk.Stack, id: string, props?: ClusterRolesProps) {
    super(scope, id);

    /**
     * This IAM role is used by the EC2 Instances themselves for bootstrapping,
     * pulling down ECR images, and interacting with the Kubernetes API.
     * Permissions for these nodes are very limited. This role is exposed here
     * explicitly so that an operator can customize the inline policies applied
     * to the role without without needing to completely define their own role.
     */
    this.nodeRole = new Role(this, 'NodeRole', {
      description: cdk.Fn.join('/', [scope.stackName, 'Minimal EC2 Node Role']),

      assumedBy: new CompositePrincipal(new ServicePrincipal('ec2.amazonaws.com')),

      managedPolicies: [
        // Base requirements for a node to register properly with the EKS cluster itself.
        ManagedPolicy.fromAwsManagedPolicyName('AmazonEKSWorkerNodePolicy'),

        /**
         * Unfortunately the AWS EKS Managed Node Group _requires_ that
         * the EKS instances boot up with the
         * "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
         * policy. We would like to prohibit this policy and use the
         * "ECRReadAccess" policy below so that we can ensure images
         * cannot be pulled cross region ... but AWS does not allow this.
         * When you try to launch a new EKS Managed NodeGroup without this
         * policy in place, it fails and tells you must add it in.
         *
         * Perhaps in a future PR we can add in a PermissionsBoundary that
         * we can use to limit the scope.
         */
        ManagedPolicy.fromAwsManagedPolicyName('AmazonEC2ContainerRegistryReadOnly'),

        /**
         * Provides management interface for administrators via the "aws ssm start-session" command, negating
         * the need to have network access into the EC2 nodes!
         */
        ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'),

        /**
         * For newer versions of the aws-node daemonset:
         * https://docs.aws.amazon.com/eks/latest/userguide/cni-iam-role.html
         */
        ManagedPolicy.fromAwsManagedPolicyName('AmazonEKS_CNI_Policy')
      ]
    });

    /**
     * If supplied, iterate over the NodeRolePolicyStatement resources and attach
     * them to the NodeRole. This allows for custom ECR permissions or other
     * Node-specific permissions to be applied by the cluster operator.
     */
    if (props?.nodeRolePolicyStatement) {
      props.nodeRolePolicyStatement.forEach((statement) => {
        this.nodeRole.addToPrincipalPolicy(statement);
      });
    }

    /**
     * This IAM role is handed to the EKS CdkCluster itself and is used by EKS
     * to make API calls on our behalf
     */
    this.clusterRole = new Role(this, 'ClusterRole', {
      description: cdk.Fn.join('/', [scope.stackName, 'Minimal EKS CdkCluster Service Role']),
      assumedBy: new CompositePrincipal(new ServicePrincipal('eks.amazonaws.com')),
      managedPolicies: [
        // Default required permissions
        ManagedPolicy.fromAwsManagedPolicyName('AmazonEKSClusterPolicy'),
        ManagedPolicy.fromAwsManagedPolicyName('AmazonEKSServicePolicy'),

        // https://docs.aws.amazon.com/eks/latest/userguide/security-groups-for-pods.html
        ManagedPolicy.fromAwsManagedPolicyName('AmazonEKSVPCResourceController')
      ]
    });

    /**
     * Look up the ExistingMasterRole and turn it into an awsiam.Role object
     * ... if it not set, then we create one on behalf of the user. This
     * logic is similar to the existing AWS CDK behavior, but we have to do
     * it ourselves so that we can have access to the MasterRole ARN to be
     * outputted at the top level of our application.
     *
     * https://github.com/aws/aws-cdk/blob/cea1039e3664fdfa89c6f00cdaeb1a0185a12678/packages/%40aws-cdk/aws-eks/lib/cluster.ts#L1492-L1506
     */
    if (props?.existingMasterRole) {
      this.masterRole = Role.fromRoleName(this, 'ExistingMasterRole', props.existingMasterRole, {
        mutable: false
      });
    } else {
      this.masterRole = new Role(this, 'MasterRole', {
        description: cdk.Fn.join('/', [scope.stackName, 'Minimal EKS Master Access Role']),
        assumedBy: new AccountRootPrincipal()
      });
    }
  }
}
