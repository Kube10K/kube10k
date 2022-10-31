#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { RootStack } from '../lib/stacks/root-stack';
import { getContextValueAsString } from '../lib/utils';

const app = new cdk.App();

const stackName = getContextValueAsString(app, 'StackName') || 'Kube10K';

new RootStack(app, stackName, {
  env: {
    account: process.env['CDK_ACCOUNT_ID'] || '123456789',
    region: process.env['CDK_DEFAULT_REGION'] || 'us-east-1'
  },

  // Core Cluster Settings
  kubernetesVersion: '1.23'
});
