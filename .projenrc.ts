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
  ],
  prettier: true,

  // Deployment to NPM. Set $NPM_TOKEN in Github Actions Secrets.
  releaseFailureIssue: true,
  npmAccess: NpmAccess.PUBLIC,
  npmTokenSecret: "NPM_TOKEN",

  // deps: [],                /* Runtime dependencies of this module. */
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
