# Kube10k - What is it?

The `Kube10k` project is aimed at providing an easy way to spin up a Kubernetes
cluster that is immediately ready to scale up to 10,000 pods in a secure and
reliable way.

## Usage

### Via Github

These modules are not currently exported to NPM or any other package registry.
Usage of them while they are in development mode can be done directly via the
`yarn` command, but require some extra help to compile the modules into `.js`
files for your application.

**Patch `packages.json`**

Add in the following `upgrade-kube10k` script into your `package.json` file:

```json
{
  ...
  "scripts": {
    ...
    "upgrade-kube10k": "yarn upgrade kube10 && cd node_modules/kube10k && yarn build"
    ...
  },
```

**Install the `kube10k` dependency**

Install the dependency with `yarn`, and then run the yarn upgrade script:

    $ yarn install projen
    $ yarn add kube10k@https://github.com/kube10k/kube10k#test
    $ yarn upgrade-kube10k
    ...
