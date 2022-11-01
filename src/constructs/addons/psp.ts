import { ICluster, KubernetesManifest } from 'aws-cdk-lib/aws-eks';
import { Construct } from 'constructs';
import { DEFAULT_RESOURCE_PREFIX } from '../../common';

export interface PodSecurityAllowedHostPath {
  readonly pathPrefix: string;
  readonly readOnly: boolean;
}

export interface OptionalPodSecurityPolicyProps {
  /**
   * Customize the prefix used by the resources created within this stack.
   * Default is {@link DEFAULT_RESOURCE_PREFIX}.
   */
  readonly resourcePrefix?: string;

  /**
   * List of Allowed Host Paths. Customize this list to allow for hostPath
   * access to certain dedicated resources such as Datadog Agents.
   */
  readonly allowedHostPaths?: PodSecurityAllowedHostPath[];
}

export interface PodSecurityPolicyProps extends OptionalPodSecurityPolicyProps {
  /**
   * The ICluster representing the EKS cluster these resources are being
   * created in.
   */
  readonly cluster: ICluster;
}

export class PodSecurityPolicy extends Construct {
  constructor(scope: Construct, id: string, props: PodSecurityPolicyProps) {
    super(scope, id);
    const resourcePrefix = props.resourcePrefix || DEFAULT_RESOURCE_PREFIX;

    /**
     * https://aws.github.io/aws-eks-best-practices/security/docs/pods/#restrict-the-containers-that-can-run-as-privileged
     *
     * This is the "restricted" policy that AWS recommends. Its VERY
     * restrictive, but we create it anyways. We will create a slightly more
     * flexible policy below this.
     *
     * We are not actively using this policy, but we implement it so that we
     * have it as a comparison and benchmark.
     */

    const restrictedPsp = new KubernetesManifest(this, 'Restricted-PSP', {
      cluster: props.cluster,
      prune: true,
      skipValidation: false,
      overwrite: true,
      manifest: [
        /**
         * Create the PodSecurityPolicy itself
         */
        {
          apiVersion: 'policy/v1beta1',
          kind: 'PodSecurityPolicy',
          metadata: {
            name: `${resourcePrefix}.restricted`,
            annotations: {
              'seccomp.security.alpha.kubernetes.io/allowedProfileNames': 'docker/default,runtime/default',
              'seccomp.security.alpha.kubernetes.io/defaultProfileName': 'runtime/default'
            }
          },
          spec: {
            privileged: false,

            // Required to prevent escalations to root.
            allowPrivilegeEscalation: false,
            /**
             * This is redundant with non-root + disallow privilege escalation,
             * but we can provide it for defense in depth.
             */
            requiredDropCapabilities: ['ALL'],

            // Allow core volume types.
            //
            // ** Assume that persistentVolumes set up by the cluster admin are
            // safe to use.
            volumes: [
              'configMap',
              'emptyDir',
              'projected',
              'secret',
              'downwardAPI',
              'persistentVolumeClaim',
              'hostPath'
            ],
            hostNetwork: false,
            hostIPC: false,
            hostPID: false,
            // Require the container to run without root privileges.
            runAsUser: {
              rule: 'MustRunAsNonRoot'
            },

            // This policy assumes the nodes are using AppArmor rather than
            // SELinux.
            seLinux: {
              rule: 'RunAsAny'
            },

            supplementalGroups: {
              rule: 'MustRunAs',
              ranges: [
                // Forbid adding the root group.
                { min: 1, max: 65535 }
              ]
            },

            fsGroup: {
              rule: 'MustRunAs',
              ranges: [
                // Forbid adding the root group.
                { min: 1, max: 65535 }
              ]
            },
            readOnlyRootFilesystem: false,
            allowedHostPaths: props.allowedHostPaths
          }
        }
      ]
    });

    const restrictedPspClusterRole = new KubernetesManifest(this, 'Restricted-PSP-ClusterRole', {
      cluster: props.cluster,
      prune: true,
      skipValidation: false,
      overwrite: true,
      manifest: [
        /**
         * Create a ClusterRole that can be used to access the PSP
         */
        {
          apiVersion: 'rbac.authorization.k8s.io/v1',
          kind: 'ClusterRole',
          metadata: {
            name: `${resourcePrefix}:podsecuritypolicy:restricted`
          },
          rules: [
            {
              apiGroups: ['policy'],
              resources: ['podsecuritypolicies'],
              resourceNames: [`${resourcePrefix}.restricted`],
              verbs: ['use']
            }
          ]
        }
      ]
    });

    /**
     * This is a bit strange - but the "aws-node" ServiceAccount already exists
     * on a cluster upon creation. The minute we apply the new
     * EksAuthenticatedPSPBinding above, we need to make sure the aws-node
     * containers can still come up with their default aws-node service account.
     *
     * Yes, we _later_ manage the aws-node ServiceAccount in the
     * eks_cni_networking.yaml, but because it technically exists already in the
     * cluster at the point at which this code is running, we want to make the
     * appropriate rolebinding right away.
     */
    const corePodsRestrictedPspAccess = new KubernetesManifest(this, 'CorePods-Restricted-Psp-Access', {
      cluster: props.cluster,
      prune: false,
      skipValidation: false,
      overwrite: true,
      manifest: [
        {
          apiVersion: 'rbac.authorization.k8s.io/v1',
          kind: 'RoleBinding',
          metadata: {
            name: `${resourcePrefix}:podsecuritypolicy:restricted:core-pods`,
            namespace: 'kube-system'
          },
          roleRef: {
            apiGroup: 'rbac.authorization.k8s.io',
            kind: 'ClusterRole',
            name: 'eks:podsecuritypolicy:privileged'
          },

          subjects: [
            // Core component pre-installed by EKS
            { kind: 'ServiceAccount', name: 'aws-node' },
            { kind: 'ServiceAccount', name: 'coredns' },
            { kind: 'ServiceAccount', name: 'kube-proxy' }
          ]
        }
      ]
    });

    /**
     * This is a slightly modified version of the 'restricted' pod policy above
     * that allows pods to run with a 'root' user.
     */

    const defaultPsp = new KubernetesManifest(this, 'Default-PSP', {
      cluster: props.cluster,
      prune: true,
      skipValidation: false,
      overwrite: true,
      manifest: [
        /**
         * Create the PodSecurityPolicy itself
         */
        {
          apiVersion: 'policy/v1beta1',
          kind: 'PodSecurityPolicy',
          metadata: {
            name: `${resourcePrefix}.default`,
            annotations: {
              'seccomp.security.alpha.kubernetes.io/allowedProfileNames': 'docker/default,runtime/default',
              'seccomp.security.alpha.kubernetes.io/defaultProfileName': 'runtime/default'
            }
          },
          spec: {
            privileged: false,

            // Required to prevent escalations to root.
            allowPrivilegeEscalation: false,

            /**
             * This is a recommended (very strict) setting - but it caused
             * problems with even the simplest containers like Nginx starting up
             * and trying to make changes to local files inside the container:
             * 2020/11/25 22:18:02 [emerg] 1#1:
             * chown("/var/cache/nginx/client_temp", 101) failed (1: Operation
             * not permitted) nginx: [emerg]
             * chown("/var/cache/nginx/client_temp", 101) failed (1: Operation
             * not permitted)
             *
             * In the future we should audit exactly which capabilities we want to enforce that we drop.
             *
             * requiredDropCapabilities: ['ALL'],
             */

            // Allow core volume types.
            //
            // ** Assume that persistentVolumes set up by the cluster admin are
            // safe to use.
            //
            // ** See allowedHostPaths for why this is OK.
            volumes: [
              'configMap',
              'emptyDir',
              'projected',
              'secret',
              'downwardAPI',
              'persistentVolumeClaim',
              'hostPath'
            ],
            hostNetwork: false,
            hostIPC: false,
            hostPID: false,

            // Require the container to run without root privileges.
            runAsUser: {
              rule: 'MustRunAsNonRoot'
            },

            // This policy assumes the nodes are using AppArmor rather than
            // SELinux.
            seLinux: {
              rule: 'RunAsAny'
            },

            supplementalGroups: {
              rule: 'MustRunAs',
              ranges: [
                // Forbid adding the root group.
                { min: 1, max: 65535 }
              ]
            },

            fsGroup: {
              rule: 'MustRunAs',
              ranges: [
                // Forbid adding the root group.
                { min: 1, max: 65535 }
              ]
            },
            readOnlyRootFilesystem: false,
            allowedHostPaths: props.allowedHostPaths
          }
        }
      ]
    });

    const defaultPspClusterRole = new KubernetesManifest(this, 'Default-PSP-ClusterRole', {
      cluster: props.cluster,
      prune: true,
      skipValidation: false,
      overwrite: true,
      manifest: [
        /**
         * Create a ClusterRole that can be used to access the PSP
         */
        {
          apiVersion: 'rbac.authorization.k8s.io/v1',
          kind: 'ClusterRole',
          metadata: {
            name: `${resourcePrefix}:podsecuritypolicy:default`
          },
          rules: [
            {
              apiGroups: ['policy'],
              resources: ['podsecuritypolicies'],
              resourceNames: [`${resourcePrefix}.default`],
              verbs: ['use']
            }
          ]
        }
      ]
    });

    const defaultPspClusterRoleBinding = new KubernetesManifest(this, 'Default-PSP-ClusterRoleBinding', {
      cluster: props.cluster,
      prune: true,
      skipValidation: false,
      overwrite: true,
      manifest: [
        /**
         * Make sure that all authenticated users can create pods with the "default" PSP
         */
        {
          apiVersion: 'rbac.authorization.k8s.io/v1',
          kind: 'ClusterRoleBinding',
          metadata: {
            name: `${resourcePrefix}:podsecuritypolicy:authenticated`,
            annotations: {
              'kubernetes.io/description': 'Allow all authenticated users to create default pods'
            },
            labels: {
              'eks.amazonaws.com/component': 'pod-security-policy',
              'kubernetes.io/cluster-service': 'true'
            }
          },
          roleRef: {
            apiGroup: 'rbac.authorization.k8s.io',
            kind: 'ClusterRole',
            name: `${resourcePrefix}:podsecuritypolicy:default`
          },
          subjects: [
            {
              apiGroup: 'rbac.authorization.k8s.io',
              kind: 'Group',
              name: 'system:authenticated'
            }
          ]
        }
      ]
    });
    defaultPspClusterRoleBinding.node.addDependency(defaultPsp);
    defaultPspClusterRoleBinding.node.addDependency(defaultPspClusterRole);

    /**
     * Re-write the default EKS-managed eks:podsecurity:authenticated ClusterRoleBinding. Note that
     * this resource is included in the cluster by default - and we overwrite it to limit its access.
     *
     * For posterity, here is the default - it allows ANY authenticated service account to launch a
     * Pod with nearly any security configuration. This is bad:
     *
     * apiVersion: rbac.authorization.k8s.io/v1
     * kind: ClusterRoleBinding
     * metadata:
     *   annotations:
     *     kubernetes.io/description: Allow all authenticated users to create privileged
     *   labels:
     *     eks.amazonaws.com/component: pod-security-policy
     *     kubernetes.io/cluster-service: "true"
     *     name: eks:podsecuritypolicy:authenticated
     * roleRef:
     *   apiGroup: rbac.authorization.k8s.io
     *   kind: ClusterRole
     *   name: eks:podsecuritypolicy:privileged
     * subjects:
     *   - apiGroup: rbac.authorization.k8s.io
     *     kind: Group
     *     name: system:authenticated
     *
     * This re-written policy routes the ClusterRoleBinding to allow the high-level "system:masters" group
     * access to this policy.
     */
    const eksAuthenticatedClusterRoleBinding = new KubernetesManifest(this, 'Eks-Authenticated-ClusterRoleBinding', {
      cluster: props.cluster,
      prune: false,
      skipValidation: false,
      overwrite: true,
      manifest: [
        {
          apiVersion: 'rbac.authorization.k8s.io/v1',
          kind: 'ClusterRoleBinding',
          metadata: {
            name: 'eks:podsecuritypolicy:authenticated',
            annotations: {
              'kubernetes.io/description': 'Allow system:masters to create privileged'
            },
            labels: {
              'eks.amazonaws.com/component': 'pod-security-policy',
              'kubernetes.io/cluster-service': 'true'
            }
          },
          roleRef: {
            apiGroup: 'rbac.authorization.k8s.io',
            kind: 'ClusterRole',
            name: 'eks:podsecuritypolicy:privileged'
          },
          subjects: [
            {
              apiGroup: 'rbac.authorization.k8s.io',
              kind: 'Group',
              name: 'system:masters'
            }
          ]
        }
      ]
    });

    /**
     *  Only create eksAuthenticatedClusterRoleBinding after the other PSPs and
     *  Roles have been created.
     */
    eksAuthenticatedClusterRoleBinding.node.addDependency(defaultPspClusterRoleBinding);
    eksAuthenticatedClusterRoleBinding.node.addDependency(restrictedPsp);
    eksAuthenticatedClusterRoleBinding.node.addDependency(restrictedPspClusterRole);
    eksAuthenticatedClusterRoleBinding.node.addDependency(corePodsRestrictedPspAccess);
  }
}
