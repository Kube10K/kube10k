import { CfnMapping, Fn } from 'aws-cdk-lib';
import { ICluster, KubernetesManifest, KubernetesPatch, KubernetesVersion } from 'aws-cdk-lib/aws-eks';
import { Construct } from 'constructs';
import { NodeTaint } from '../k8s/common';

export interface CoreDnsProps {
  readonly cluster: ICluster;

  /**
   * Customize the prefix used by the resources created within this stack.
   * Default is {@link DEFAULT_RESOURCE_PREFIX}.
   */
  readonly resourcePrefix?: string;
  readonly kubernetesVersion: KubernetesVersion;
  readonly nodeTaint: NodeTaint;
}

export class CoreDns extends Construct {
  constructor(scope: Construct, id: string, props: CoreDnsProps) {
    super(scope, id);

    const versionTable = new CfnMapping(this, 'VersionMapping', {
      mapping: {
        '1.23': {
          CoreDnsTag: 'v1.8.7-eksbuild.2'
        },
        '1.22': {
          CoreDnsTag: 'v1.8.7'
        },
        '1.21': {
          CoreDnsTag: 'v1.8.4'
        }
      }
    });

    /**
     * On new clusters, AWS automatically creates the ClusterRole with the
     * appropriate privileges. However, on legacy clusters they do not go back
     * and update your addons for you - like CoreDNS. We trigger the update (see
     * version mapping above), which means we also need to ensure that the
     * permissions are correct.  This is similar to the PR
     * https://github.com/cilium/cilium/pull/18104/files. We were missing the
     * "discovery.k8s.io" permissions, which causes CoreDNS to break completely
     * rather than failing gracefully.
     */
    const missingClusterRole = new KubernetesManifest(this, 'ClusterRole', {
      cluster: props.cluster,
      prune: false,
      skipValidation: false,
      overwrite: true,
      manifest: [
        {
          apiVersion: 'rbac.authorization.k8s.io/v1',
          kind: 'ClusterRole',
          metadata: {
            name: 'system:coredns',
            namespace: 'kube-system',
            labels: {
              'eks.amazonaws.com/component': 'coredns',
              'k8s-app': 'kube-dns',
              'kubernetes.io/bootstrapping': 'rbac-defaults'
            }
          },
          rules: [
            {
              apiGroups: [''],
              resources: ['endpoints', 'services', 'pods', 'namespaces'],
              verbs: ['list', 'watch']
            },
            {
              apiGroups: ['discovery.k8s.io'],
              resources: ['endpointslices'],
              verbs: ['list', 'watch']
            }
          ]
        }
      ]
    });

    /**
     * Ensure that the Cluster Autoscaler and Kubernetes Scheduler understand
     * how important CoreDNS is by installing a PodDisruptionBudget to ensure no
     * more than 1 pod is ever disrupted (intentionally) at a time.
     */
    new KubernetesManifest(this, 'PodDisruptionBudget', {
      cluster: props.cluster,
      prune: true,
      skipValidation: false,
      overwrite: false,
      manifest: [
        {
          apiVersion: 'policy/v1beta1',
          kind: 'PodDisruptionBudget',
          metadata: {
            name: 'core-dns',
            namespace: 'kube-system',
            labels: {
              'eks.amazonaws.com/component': 'coredns',
              'k8s-app': 'kube-dns'
            }
          },
          spec: {
            maxUnavailable: 1,
            selector: {
              matchLabels: {
                'eks.amazonaws.com/component': 'coredns'
              }
            }
          }
        }
      ]
    });

    new KubernetesPatch(this, 'VersionPatch', {
      cluster: props.cluster,
      resourceName: 'deployment/coredns',
      resourceNamespace: 'kube-system',
      applyPatch: {
        spec: {
          template: {
            metadata: {
              annotations: {
                // In the event that Datadog is being used to monitor the cluster, these annotations will
                // send the critical datadog logs/metrics to Datadog.
                'ad.datadoghq.com/coredns.logs': '[{"source": "coredns", "service": "kube-dns"}]',
                'ad.datadoghq.com/coredns.check_names': '["coredns"]',
                'ad.datadoghq.com/coredns.init_configs': '[{}]',
                'ad.datadoghq.com/coredns.instances':
                  '[{"prometheus_url": "http://%%host%%:9153/metrics", "tags": ["dns-pod:%%host%%"]}]'
              }
            },
            spec: {
              // Ensure that the CoreDNS Pods tolerate the taints for the "system" nodes.
              tolerations: [
                props.nodeTaint.getToleration(),
                // Original Tolerations
                { key: 'node-role.kubernetes.io/master', effect: 'NoSchedule' },
                { key: 'CriticalAddonsOnly', operator: 'Exists' }
              ],
              affinity: {
                /**
                 * Try to run CoreDNS pods on the kube-system nodes. If not
                 * possible, then go ahead and let them get scheduled wherever.
                 * This means that at least some pods will run on long-lived
                 * fairly stable hardware, limiting the number of pods that run
                 * on hardware that tends to have a higher churn rate.
                 *
                 *
                 * "nodeAffinity": props.NodeIsolation.GetNodeAffinity(),
                 */

                /**
                 * The default AWS supplied podAntiAffinity rule is "preferred"
                 * - but that means you can still end up with CoreDNS pods
                 * sharing a host. When CoreDNS shares a host, it _usually_
                 * shares an ENI as well. Amazon VPC DNS services limit the DNS
                 * requests from each ENI to 1000req/sec.
                 *
                 * What happens here is that you can end up with multiple
                 * CoreDNS pods on the same ENI, which means that you are really
                 * sharing that 1000req/sec limit across multiple pods, and this
                 * results in "i/o timeout" errors in CoreDNS and failed
                 * responses back to clients.
                 *
                 * In EKS, we want to make sure it is a hard-requirement that
                 * CoreDNS runs on individual hosts to guarantee that they are
                 * not sharing ENIs.
                 */
                podAntiAffinity: {
                  // Wipe out the original config
                  preferredDuringSchedulingIgnoredDuringExecution: [],

                  // Insert our new stricter config
                  requiredDuringSchedulingIgnoredDuringExecution: [
                    {
                      topologyKey: 'kubernetes.io/hostname',
                      labelSelector: {
                        matchExpressions: [
                          {
                            key: 'k8s-app',
                            operator: 'In',
                            values: ['kube-dns']
                          }
                        ]
                      }
                    }
                  ]
                }
              },

              /**
               * AWS does not auto-upgrade our CoreDNS versions, so we do it.
               */
              containers: [
                {
                  name: 'coredns',
                  image: Fn.join(':', [
                    Fn.sub('602401143452.dkr.ecr.${AWS::Region}.amazonaws.com/eks/coredns'),
                    versionTable.findInMap(props.kubernetesVersion.version, 'CoreDnsTag')
                  ])
                }
              ]
            }
          }
        }
      },
      // In a "delete" operation, just ignore this resource
      restorePatch: {}
    }).node.addDependency(missingClusterRole);
  }
}
