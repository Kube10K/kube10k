import { App, Stack } from 'aws-cdk-lib';
import { IMachineImage, UserData } from 'aws-cdk-lib/aws-ec2';
import * as bottlerocket from '../src/constructs/k8s/bottlerocket';

const DEFAULT_EXPECTED_BOTTLEROCKET_CONFIG: string = `[settings]

[settings.bootstrap-containers]

[settings.bootstrap-containers.customContainer]
mode = "always"
essential = true
source = "docker.io/myCustomContainer"

[settings.kubernetes]
api-server = "1.2.3.4"
cluster-name = "testCluster"
cluster-certificate = "junkData"
cluster-dns-ip = ["1.1.1.1", "2.2.2.2"]
image-gc-high-threshold-percent = "75"
image-gc-low-threshold-percent = "45"
event-qps = 0
kube-api-qps = 30
kube-api-burst = 60

[settings.kubernetes.eviction-hard]
"memory.available" = "5%"
"nodefs.available" = "10%"
"nodefs.inodesFree" = "15%"
"imagefs.available" = "30%"
"imagefs.inodesFree" = "15%"
"pid.available" = "30%"

[settings.kubernetes.node-taints]
taintKey = "taintValue:NoExecute"

[settings.kernel]

[settings.kernel.sysctl]
"net.ipv4.ip_local_port_range" = "12288 65000"
"fs.inotify.max_user_instances" = "8192"
"fs.inotify.max_user_watches" = "1048676"`;

describe('Bottlerocket Configuration Generation', () => {
  test('getToml() with default values', () => {
    // GIVEN
    const testObj = new bottlerocket.BottleRocketSettings(
      '1.2.3.4',
      'testCluster',
      'junkData',
      ['1.1.1.1', '2.2.2.2'],
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      // Test the CustomContainers
      {
        customContainer: {
          mode: bottlerocket.BootstrapContainerMode.ALWAYS,
          essential: true,
          source: 'docker.io/myCustomContainer',
        },
      },
    );

    testObj.addTaint('taintKey', 'taintValue', 'NoExecute');

    // ASSERT
    expect(DEFAULT_EXPECTED_BOTTLEROCKET_CONFIG).toEqual(DEFAULT_EXPECTED_BOTTLEROCKET_CONFIG);
    expect(testObj.toToml()).toContain('foo');
  });

  test('percentage()', () => {
    // GIVEN
    const testObj = new bottlerocket.BottleRocketSettings('1.2.3.4', 'testCluster', 'junkData', ['1.1.1.1', '2.2.2.2']);

    // ASSERT
    expect(testObj.percentage(0)).toEqual('0%');
    expect(testObj.percentage(-1)).toEqual(undefined);
  });

  test('addTaint()', () => {
    // GIVEN
    const testObj = new bottlerocket.BottleRocketSettings('1.2.3.4', 'testCluster', 'junkData', ['1.1.1.1', '2.2.2.2']);

    // ASSERT: node-taints starts out empty
    expect(testObj.settings.kubernetes['node-taints']).toEqual(undefined);

    // THEN: add a taint
    testObj.addTaint('testKey', 'testValue', 'testEffect');

    // ASSERT: taint line is now set
    expect(testObj.settings.kubernetes['node-taints']).toEqual({ testKey: 'testValue:testEffect' });
  });

  test('getUserData()', () => {
    // GIVEN
    const testObj = new bottlerocket.BottleRocketSettings('1.2.3.4', 'testCluster', 'junkData', ['1.1.1.1', '2.2.2.2']);

    // THEN: Expect we get back a UserData object
    const userData: UserData = testObj.userData();

    // ASSERT: Some TOML is reported back from the userdata string
    // expect(userData.render()).toContain('[settings]');
    expect(userData.render()).toContain('foo');
  });

  test('getMachineImage()', () => {
    // GIVEN
    const app = new App();
    const stack = new Stack(app, 'TestStack');

    // THEN
    const machineImage: IMachineImage = bottlerocket.generateMachineImage('X86_64', '1.2.3');

    // ASSERT: We get back an SSM Parameter
    expect(stack.resolve(machineImage.getImage(stack)).imageId.Ref).toContain('Ssm');
  });

  test('getImageId()', () => {
    // GIVEN
    const app = new App();
    const stack = new Stack(app, 'TestStack');

    // THEN
    const machineImageId: string = bottlerocket.generateImageId(stack, '1.23', 'X86_64', '1.2.3');

    // ASSERT: We get back an SSM Parameter
    expect(stack.resolve(machineImageId).Ref).toContain('Ssm');
  });
});
