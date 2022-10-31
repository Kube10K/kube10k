const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Matt Wise',
  authorAddress: 'wise@wiredgeek.net',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'kube10k',
  repositoryUrl: 'git@github.com:Kube10K/kube10k.git',
  gitignore: [
    // CDK Temp Data
    'cdk.out',
    'cdk.staging',

    // VIM
    '*.swp',
    '*.swo',
  ],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
