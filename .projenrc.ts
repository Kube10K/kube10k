import { awscdk, JsonPatch } from "projen";
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
    // "test/integ/**/*integ.snapshot",
  ],
  prettier: true,

  // Deployment to NPM. Set $NPM_TOKEN in Github Actions Secrets.
  releaseFailureIssue: true,
  npmAccess: NpmAccess.PUBLIC,
  npmTokenSecret: "NPM_TOKEN",

  bundledDeps: ["yaml"],

  devDeps: [
    // https://yarnpkg.com/package/clean-ts-built
    "clean-ts-built",

    // Integ-Tests
    "@aws-cdk/integ-tests-alpha",
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

// https://github.com/projen/projen/issues/2094#issuecomment-1266153065
const buildWorkflow = project.tryFindObjectFile(".github/workflows/build.yml");
buildWorkflow?.patch(
  JsonPatch.add("/jobs/build/container/options", "--group-add 121")
);

// clean-ts-built
project.setScript("clean", "npx clean-ts-built .");

// Integ-Tests
project.setScript(
  "integ",
  "npx tsc -p test/integ && npx integ-runner --parallel-regions=us-west-2 --update-on-failed"
);

project.synth();
