# Kube10k - What is it?

The `Kube10k` project is aimed at providing an easy way to spin up a Kubernetes
cluster that is immediately ready to scale up to 10,000 pods in a secure and
reliable way.

## Usage

### Via Github


```json
{
  ...
  "scripts": {
    ...
    "upgrade-kube10k": "yarn upgrade kube10 && cd node_modules/kube10k && yarn build"
    ...
  },
```


    $ yarn install projen
    $ yarn add kube10k@https://github.com/kube10k/kube10k#test
    $ 

