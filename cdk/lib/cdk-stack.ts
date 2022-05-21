import {
  Stack,
  StackProps,
  Duration,
  CfnOutput,
  RemovalPolicy,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { BuildConfig } from './build-config';
import { SampleService } from './constructs/sample-service';

export interface CdkStackProps extends StackProps {
  readonly buildConfig: BuildConfig;
}

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: CdkStackProps) {
    super(scope, id, props);

    const auth = new SampleService(this, 'SampleService', {});
  }
}
