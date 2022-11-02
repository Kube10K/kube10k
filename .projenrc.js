/** @format */

const { awscdk } = require("projen");
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Matt Wise",
  authorAddress: "wise@wiredgeek.net",
  authorName: "Matt Wise",
  cdkVersion: "2.50.0",
  defaultReleaseBranch: "main",
  description: "Constructs for creating scalable Kubernetes clusters",
  name: "kube10k",
  repositoryUrl: "https://github.com/Kube10k/kube10k",
  gitignore: [
    // CDK Temp Data
    "cdk.out",
    "cdk.staging",

    // VIM
    "*.swp",
    "*.swo",
  ],

  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.addBundledDeps("yaml");
project.addBundledDeps("tomlify-j0.4");

project.vscode.extensions.addRecommendations("dbaeumer.vscode-eslint");
project.vscode.extensions.addRecommendations("orta.vscode-jest");
project.vscode.extensions.addRecommendations("esbenp.prettier-vscode");

project.vscode.settings.addSetting("eslint.options", {
  configFile: ".eslintrc.json",
});

// TODO: Determine if this valuable or not
// project.vscode.launchConfiguration.addConfiguration({
//   type: "node",
//   request: "launch",
//   name: "Launch Program",
//   skipFiles: ["<node_internals>/**"],
//   program: "${file}",
//   outFiles: ["${workspaceFolder}/lib/**/*.js"],
// });

project.synth();
