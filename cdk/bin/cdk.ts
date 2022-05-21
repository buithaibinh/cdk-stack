#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkStackProps, CdkStack } from '../lib/cdk-stack';
import { Utils } from '../lib/utils';
import { BuildConfig } from '../lib/build-config';

const app = new cdk.App();

const env = app.node.tryGetContext('config');
if (!env)
  throw new Error(
    'Missing environment context. Pass in as `dev|stag|prod` in last command line argument.'
  );

let buildConfig: BuildConfig = app.node.tryGetContext(env);

const stackName = Utils.getEnv('STACK_NAME');
const stackAccount = Utils.getEnv('STACK_ACCOUNT');
const stackRegion = Utils.getEnv('STACK_REGION');
const stackProps: CdkStackProps = {
  env: { region: stackRegion, account: stackAccount },
  buildConfig,
};

// tags
cdk.Tags.of(app).add('App', stackName);
cdk.Tags.of(app).add('Environment', buildConfig.Environment);
cdk.Tags.of(app).add('Version', buildConfig.Version);

new CdkStack(app, stackName, stackProps);
