/** @format */

import { awscdk } from "projen";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Matt Wise",
  authorAddress: "wise@wiredgeek.net",
  cdkVersion: "2.50.0",
  defaultReleaseBranch: "main",
  description: "Constructs for creating scalable Kubernetes clusters",
  name: "kube10k",
  packageName: "@Kube10k/kube10k",
  repositoryUrl: "https://github.com/Kube10k/kube10k.git",
  stability: "experimental",
  gitignore: [
    // CDK Temp Data
    "cdk.out",
    "cdk.staging",

    // VIM
    "*.swp",
    "*.swo",
  ],
  projenrcTs: true /* https://projen.io/typescript.html */,
  prettier: true,

  // Non-JSII resources
  bundledDeps: ["yaml"],
});

project.vscode?.extensions.addRecommendations("dbaeumer.vscode-eslint");
project.vscode?.extensions.addRecommendations("orta.vscode-jest");
project.vscode?.extensions.addRecommendations("esbenp.prettier-vscode");

project.vscode?.settings.addSetting("eslint.options", {
  configFile: ".eslintrc.json",
});

project.synth();
