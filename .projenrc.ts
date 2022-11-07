import { awscdk } from "projen";
import { NpmAccess } from "projen/lib/javascript";

const project = new awscdk.AwsCdkConstructLibrary({
  author: "Matt Wise",
  authorAddress: "wise@wiredgeek.net",
  stability: "experimental",
  cdkVersion: "2.50.0",
  defaultReleaseBranch: "main",
  name: "kube10k",
  repositoryUrl: "https://github.com/Kube10K/kube10k.git",
  projenrcTs: true /* https://projen.io/typescript.html */,
  gitignore: [
    // CDK Temp Data
    "cdk.out",
    "cdk.staging",

    // VIM
    "*.swp",
    "*.swo",

    // Integ-Tests
    "*.d.ts",
    "*.generated.ts",
    "*.js",
    "*.js.map",
    "*.d.ts",
    "*.generated.ts",
    "*.js",
    "*.js.map",
    "test/integ/**/cdk-integ.out.*",
    "test/integ/**/*integ.snapshot",
  ],
  prettier: true,

  // Deployment to NPM. Set $NPM_TOKEN in Github Actions Secrets.
  releaseFailureIssue: true,
  npmAccess: NpmAccess.PUBLIC,
  npmTokenSecret: "NPM_TOKEN",

  devDeps: [
    // Integ-Tests
    "@aws-cdk/integ-tests-alpha@2.41.0-alpha.0",
    "@aws-cdk/integ-runner@^2",
  ],

  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.vscode?.extensions.addRecommendations("dbaeumer.vscode-eslint");
project.vscode?.extensions.addRecommendations("orta.vscode-jest");
project.vscode?.extensions.addRecommendations("esbenp.prettier-vscode");

project.vscode?.settings.addSetting("eslint.options", {
  configFile: ".eslintrc.json",
});

project.synth();
