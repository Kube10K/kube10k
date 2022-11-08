import * as path from "path";
import { CfnJson, CustomResource, Fn, RemovalPolicy, Stack } from "aws-cdk-lib";
import { Cluster } from "aws-cdk-lib/aws-eks";
import { CfnOIDCProvider, FederatedPrincipal } from "aws-cdk-lib/aws-iam";
import {
  Architecture,
  Code,
  Function,
  LayerVersion,
  Runtime,
} from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export interface OidcIrsaProps {
  /**
   * We use the {@link Cluster} resource here specifically because we need
   * access to the `clusterOpenIdConnectIssuerUrl` property which is not
   * exposed in the {@link ICluster} resource.
   */
  readonly cluster: Cluster;
}

/**
 * https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html
 *
 * This construct implements the OIDC IRSA (IAM Role <-> SerivceAccount) system
 * for EKS, and provides helper functions that can be used by other constructs
 * for creating IAM Roles that map to Service Accounts.
 */
export class OidcIrsa extends Construct {
  // Store the {@link OpenIdConnectProvider} internally for access by functions.
  private readonly oidcProvider: CfnOIDCProvider;

  // Stores the OIDC "cluster id" prefix that's been generated and is used in
  // the StringEquals {@link Condition} for the final {@link FederatedPolicy}
  public readonly clusterIdString: string;

  constructor(scope: Stack, id: string, props: OidcIrsaProps) {
    super(scope, id);

    // Required for populating the OIDC info below
    const region: string = scope.region;

    /**
     * ref: https://github.com/aws/aws-cdk/issues/21197
     * ref: https://github.com/aws/aws-cdk/issues/21197#issuecomment-1293641857
     *
     * This custom lambda function is used to hit the
     * EKSCluster.OpenIdConnectIssuerUrl and thumbprint the JWKS Root
     * Certificate data.
     *
     * This blog post gives an overview of the problem and how its solvable at
     * least using openssl commands:
     *
     * https://medium.com/@marcincuber/amazon-eks-with-oidc-provider-iam-roles-for-kubernetes-services-accounts-59015d15cb0c
     *
     * Another doc from AWS itself documents the process we're going through here:
     *
     * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc_verify-thumbprint.html
     *
     * Relative path imports work within your own module, but when you are using the code from outside the module (eg,
     * integration tests or a client app) they don't work). Instead, we use __dirname to walk up the tree from this file
     * location.
     *
     */
    const assetPath = path.resolve(
      __dirname,
      "..",
      "..",
      "assets",
      "thumbprint-layer"
    );
    const codeDirectory = Code.fromAsset(assetPath);
    const thumbprintLayer: LayerVersion = new LayerVersion(
      this,
      "ThumbprintLayer",
      {
        removalPolicy: RemovalPolicy.DESTROY,
        layerVersionName: scope.stackName,
        code: Code.fromDockerBuild(codeDirectory.path, {
          file: "Dockerfile",
          platform: Architecture.X86_64.dockerPlatform,
          imagePath: "/opt",
        }),
        compatibleArchitectures: [Architecture.X86_64],
      }
    );
    const handler = new Function(this, "ThumbprintHandler", {
      runtime: Runtime.PYTHON_3_7,
      code: codeDirectory,
      layers: [thumbprintLayer],
      handler: "thumbprint.handler",
    });
    handler.node.addDependency(thumbprintLayer);

    /**
     * Once we have the provider endpoint (which the AWS::EKS::Cluster gives
     * us via the OpenIdConnectIssuerUrl attribute), we can use our custom
     * lambda above to go and get the root_cert from it, and thumbprint it.
     * This thumbprint is needed to create the AWS::IAM::OIDCProvider resource
     * which the cluster will ultimately use to handle OIDC requests from Pods
     * that need credentials.
     */
    const thumbprint = new CustomResource(this, "Thumbprint", {
      removalPolicy: RemovalPolicy.RETAIN,
      resourceType: "Custom::Thumbprint",
      serviceToken: handler.functionArn,
      properties: {
        URL: props.cluster.clusterOpenIdConnectIssuerUrl,
      },
    });
    thumbprint.node.addDependency(handler);

    /**
     * Configure an OpenID provider that allows for ServiceAccounts to retrieve
     * AWS IAM Credentials.
     */
    this.oidcProvider = new CfnOIDCProvider(this, "OidcProvider", {
      thumbprintList: [thumbprint.ref],
      clientIdList: ["sts.amazonaws.com"],
      url: props.cluster.clusterOpenIdConnectIssuerUrl,
    });

    //Tags.of(this.oidcProvider).add((key = 'cfn.eks-dev.stack'), (value = 'iam-pid-stack'));

    /**
     * Turns "https://oidc.eks.us-west-2.amazonaws.com/id/C9D56A876D1E79668DEBFBC7D35A9931" into
     *       "C9D56A876D1E79668DEBFBC7D35A9931"
     */
    const clusterId = Fn.select(
      4,
      Fn.split("/", props.cluster.clusterOpenIdConnectIssuerUrl)
    );

    /**
     * Stores "C9D56A876D1E79668DEBFBC7D35A9931" as an output formatted like this:
     *   "oidc.eks.us-west-2.amazonaws.com/id/C9D56A876D1E79668DEBFBC7D35A9931"
     */
    this.clusterIdString = `oidc.eks.${region}.amazonaws.com/id/${clusterId}`;
  }

  /**
   *
   * This function returns back an {@link FederatedPolicy} resource for use in
   * creating an {@link Role} resource that will be used by a Kubernetes
   * `ServiceAccount` to access AWS.
   *
   * @param scope The scope in which the policy resource JSON should be created.
   *              This should be the same construct in which the caller is.
   * @param ns The Namespace for the ServiceAccount
   * @param sa The ServiceAccount name
   * @returns A populated {@link FederatedPolicy} resource
   */
  public generateFederatedPolicy(
    scope: Construct,
    ns: string,
    sa: string
  ): FederatedPrincipal {
    return new FederatedPrincipal(
      this.oidcProvider.attrArn,
      {
        StringEquals: new CfnJson(scope, "FederatedPrincipalCondition", {
          value: {
            [`${this.clusterIdString}:aud`]: "sts.amazonaws.com",
            [`${this.clusterIdString}:sub`]: `system:serviceaccount:${ns}:${sa}`,
          },
        }),
      },
      "sts:AssumeRoleWithWebIdentity"
    );
  }
}
