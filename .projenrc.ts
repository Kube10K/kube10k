import { awscdk } from 'projen';
// https://projen.io/api/API.html
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Matt Wise',
  authorAddress: 'wise@wiredgeek.net',
  cdkVersion: '2.50.0',
  defaultReleaseBranch: 'main',
  name: 'kube10k',
  repositoryUrl: 'https://github.com/Kube10K/kube10k.git',
  gitignore: [
    // CDK Temp Data
    'cdk.out',
    'cdk.staging',

    // VIM
    '*.swp',
    '*.swo'
  ],
  projenrcTs: true /* https://projen.io/typescript.html */,
  peerDeps: ['aws-cdk-lib', 'constructs'],
  devDeps: ['@types/jest', 'jest'],
  majorVersion: 2
});
//project.addBundledDeps('yaml');
project.addDeps('yaml');
project.addDeps('tomlify-j0.4');
//project.addBundledDeps('tomlify-j0.4');
project.synth();
