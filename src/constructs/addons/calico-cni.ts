import { Fn, Stack } from 'aws-cdk-lib';
import { HelmChart, ICluster, KubernetesManifest } from 'aws-cdk-lib/aws-eks';
import { Construct } from 'constructs';
import { HelmChartOverrides } from '../../common';
import { NodeTaint } from '../k8s/common';

// The namespace where the pods and configuration will will live.
const TARGET_NAMESPACE: string = 'calico-system';

// Default values for the helm chart
const DEFAULT_HELM_CHART: string = 'tigera-operator';
const DEFAULT_HELM_CHART_VERSION: string = '3.24.3';
const DEFAULT_HELM_REPO: string = 'https://projectcalico.docs.tigera.io/charts';
const DEFAULT_HELM_RELEASE_NAME: string = 'tigera-operator';

export interface CalicoProps {
  readonly cluster: ICluster;

  /**
   * We explicitly run the Tigera Operator on the System nodes
   */
  readonly nodeTaint: NodeTaint;

  /**
   * If supplied, this allows for helm chart defaults to be overridden by the caller.
   */
  readonly helm?: HelmChartOverrides;
}

export class CalicoCni extends Construct {
  // References for the purpose of testing
  public readonly serviceEndpointConfig: KubernetesManifest;

  constructor(scope: Stack, id: string, props: CalicoProps) {
    super(scope, id);

    /**
     * Get our "release name" and verify its sanity.
     */
    const releaseName: string = props.helm?.releaseName || DEFAULT_HELM_RELEASE_NAME;

    /**
     * Pre-create the Namespace. This ensures that the namespace is removed if
     * we delete this stack.
     */
    const namespace = new KubernetesManifest(this, 'Namespace', {
      cluster: props.cluster,
      prune: true,
      skipValidation: false,
      overwrite: false,
      manifest: [
        {
          apiVersion: 'v1',
          kind: 'Namespace',
          metadata: {
            name: TARGET_NAMESPACE,
          },
        },
      ],
    });

    /**
     * Pre-create an optional resource that is used if the user wants to enable
     * eBPF mode.
     *
     * In eBPF mode, the kube-proxy pods end up going away entirely. When that
     * happens, Calico needs a way to reach the Kubernetes API services without
     * using the local magic-ip that kube-proxy provides. This configmap is
     * loaded up by the calico pods and just tells them exactly how to get to
     * the service endpoint.
     *
     * ref: https://docs.projectcalico.org/maintenance/ebpf/ebpf-and-eks
     * ref: https://projectcalico.docs.tigera.io/archive/v3.23/about/about-ebpf
     */
    this.serviceEndpointConfig = new KubernetesManifest(this, 'ServiceEndpointConfig', {
      cluster: props.cluster,
      prune: true,
      skipValidation: false,
      overwrite: false,
      manifest: [
        {
          apiVersion: 'v1',
          kind: 'ConfigMap',
          metadata: {
            name: 'kubernetes-services-endpoint',
            namespace: TARGET_NAMESPACE,
          },
          data: {
            KUBERNETES_SERVICE_PORT: '443',
            KUBERNETES_SERVICE_HOST: Fn.select(1, Fn.split('https://', props.cluster.clusterEndpoint)),
          },
        },
      ],
    });
    this.serviceEndpointConfig.node.addDependency(namespace);

    /**
     * The Tigera Operator uses a host-path mount to `/var/lib/calico`, so we
     * need to grant privileged access to do that. The Helm chart does not do
     * that.
     *
     * PodSecurityPolicies are going away in the future, but until we implement
     * a replacement in this application, we will continue to use them. Here we
     * grant the Tigera Operator Service Account acesss to use the eks
     * privileged PSP.
     */
    const pspAccess = new KubernetesManifest(this, 'PodSecurityPolicyAccess', {
      cluster: props.cluster,
      prune: true,
      skipValidation: false,
      overwrite: false,
      manifest: [
        {
          apiVersion: 'rbac.authorization.k8s.io/v1',
          kind: 'RoleBinding',
          metadata: {
            name: releaseName,
            namespace: TARGET_NAMESPACE,
          },
          roleRef: {
            apiGroup: 'rbac.authorization.k8s.io',
            kind: 'ClusterRole',
            name: 'eks:podsecuritypolicy:privileged',
          },
          subjects: [
            {
              kind: 'ServiceAccount',
              name: releaseName,
            },
          ],
        },
      ],
    });
    pspAccess.node.addDependency(namespace);

    /**
     * ref: https://projectcalico.docs.tigera.io/getting-started/kubernetes/helm
     */
    const chart = new HelmChart(this, id, {
      cluster: props.cluster,
      repository: props.helm?.repository || DEFAULT_HELM_REPO,
      chart: props.helm?.chart || DEFAULT_HELM_CHART,
      version: props.helm?.version || DEFAULT_HELM_CHART_VERSION,
      release: props.helm?.releaseName || DEFAULT_HELM_RELEASE_NAME,
      createNamespace: false,
      namespace: TARGET_NAMESPACE,
      values: {
        // Include values supplied by the user. Then override certain explicit
        // settings that we care about below.
        ...props.helm?.values,

        installation: {
          // Ensures things are installed into the TARGET_NAMESPACE
          kubernetesProvider: 'EKS',
          // Ensure Tigera understands were using AWS VPC networking mode
          cni: {
            type: 'AmazonVPC',
          },
          // Set individual resources for components
          componentResources: [
            {
              componentName: 'Node',
              resourceRequirements: {
                requests: {
                  cpu: '100m',
                  memory: '128Mi',
                },
              },
            },

            {
              componentName: 'Typha',
              resourceRequirements: {
                requests: {
                  cpu: '500m',
                  memory: '256Mi',
                },
              },
            },

            {
              componentName: 'KubeControllers',
              resourceRequirements: {
                requests: {
                  cpu: '25m',
                  // Observed ~1Gi @ 400 nodes
                  memory: '2Gi',
                },
              },
            },
          ],

          // Only applies to kube-controllers and apiserver for now.
          controlPlaneNodeSelector: props.nodeTaint.nodeSelector(),
          controlPlaneTolerations: [props.nodeTaint.toleration()],

          /**
           * Bottlerocket cannot create local shared filesystems with the
           * flexVol system.. and we don't need it. It's not clear what they do,
           * but they are not necessary.
           *
           * https://github.com/bottlerocket-os/bottlerocket/issues/2413
           * https://kubernetes.io/docs/concepts/storage/volumes/#flexvolume-deprecated
           */
          flexVolumePath: 'None',
        },

        /**
         * These resources have worked fine on clusters upwards of 500+ nodes
         */
        resources: {
          requests: {
            cpu: '100m',
            memory: '384Mi',
          },
          limits: {
            /** The tigera-operator usually operates at a low memory footprint
             * (~200-300mb). However, when it does a big reconciliation, it can
             * spike its memory usage and then never gives it back. We set a
             * memory limit here so that if the footprint is too large we OOM it
             * gets too big.
             */
            memory: '1Gi',
          },
        },

        /**
         * Override the default toleration ("tolerate everything") for the
         * operator and instead tolerate our system nodes only for the operator.
         */
        tolerations: [props.nodeTaint.toleration()],
      },

      // Waiting is potentially dangerous during certain upgrade/reconfiguration
      // events. The onus of verifying that these apps are working perfectly is
      // to the cluster operator.
      wait: false,
    });
    chart.node.addDependency(namespace);
    chart.node.addDependency(pspAccess);

    /**
     * Lastly, create some Services that will be used for prometheus monitoring
     * later on.
     */
    new KubernetesManifest(this, 'FelixMetrics', {
      cluster: props.cluster,
      prune: true,
      skipValidation: false,
      overwrite: true,
      manifest: [
        {
          apiVersion: 'v1',
          kind: 'Service',
          metadata: {
            name: `${releaseName}-felix-metrics`,
            namespace: TARGET_NAMESPACE,
          },
          spec: {
            selector: {
              'k8s-app': 'calico-node',
            },
            ports: [
              {
                port: 9091,
                targetPort: 9091,
                name: 'metrics',
                protocol: 'TCP',
              },
            ],
          },
        },
      ],
    }).node.addDependency(namespace);

    new KubernetesManifest(this, 'TyphaMetrics', {
      cluster: props.cluster,
      prune: true,
      skipValidation: false,
      overwrite: true,
      manifest: [
        {
          apiVersion: 'v1',
          kind: 'Service',
          metadata: {
            name: `${releaseName}-typha-metrics`,
            namespace: TARGET_NAMESPACE,
          },
          spec: {
            selector: {
              'k8s-app': 'calico-typha',
            },
            ports: [
              {
                port: 9093,
                targetPort: 9093,
                name: 'metrics',
                protocol: 'TCP',
              },
            ],
          },
        },
      ],
    }).node.addDependency(namespace);
  }
}
