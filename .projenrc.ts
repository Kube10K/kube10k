import { awscdk } from "projen";

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
    "!**/*.integ.snapshot/**/asset.*/*.js",
    "!**/*.integ.snapshot/**/asset.*/*.d.ts",
    "!**/*.integ.snapshot/**/asset.*/**",
    "*.d.ts",
    "*.generated.ts",
    "*.js",
    "*.js.map",
  ],
  prettier: true,

  devDeps: [
    // Integ-Tests
    "@aws-cdk/integ-tests-alpha@2.41.0-alpha.0",
    "@aws-cdk/integ-runner@^2",
  ],
});

// Integ-Tests
// const integConfig = new JsonFile(project, "test/integ/tsconfig.json", {
//   obj: {
//     extends: "../../tsconfig.dev.json",
//     include: ["./**/integ.*.ts"],
//   },
// });
project.setScript(
  "integ",
  "npx tsc -p test/integ && npx integ-runner --parallel-regions=us-west-2 --update-on-failed"
);

// VSCode Customizations
project.vscode?.extensions.addRecommendations("dbaeumer.vscode-eslint");
project.vscode?.extensions.addRecommendations("orta.vscode-jest");
project.vscode?.extensions.addRecommendations("esbenp.prettier-vscode");
project.vscode?.settings.addSetting("eslint.options", {
  configFile: ".eslintrc.json",
});

project.synth();
