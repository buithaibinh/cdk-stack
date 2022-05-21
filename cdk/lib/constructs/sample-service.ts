import { StackProps } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export interface SampleServiceProps extends StackProps {}
export class SampleService extends Construct {
  readonly worker: ec2.Instance;

  constructor(scope: Construct, id: string, props: SampleServiceProps) {
    super(scope, id);
  }
}
