#!/usr/bin/env bash
export AWS_SDK_LOAD_CONFIG=1 # allows the SDK to load from config. see https://github.com/aws/aws-sdk-js/pull/1391

## ====================================================================================================================
## 1. the CloudFormation stack name, e.g. "MyAppName"
## ====================================================================================================================

export STACK_NAME="MyAppName"

## ====================================================================================================================
## 2. explicitly define the account you intend to deploy into
## ====================================================================================================================

export STACK_ACCOUNT=$(aws sts get-caller-identity --query "Account" --output text)
export STACK_REGION=$(aws configure get region)
