# CDK Fargate Cluster

### 1 Install Docker for your environment

https://www.docker.com/products/docker-desktop

### 2 Install the AWS CDK

https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html#getting_started_install


### 3 Configure your AWS environment

Run `aws configure` or authenticate using SSO environment variables.

Verify: `aws s3 ls`

### 4 Initialize a typescript CDK Project

Create a new directory and open a terminal in it.

Run: `cdk init app --language typescript`

### 5 Create a `src` Directory

`mkdir src`

Continue to directions in `src/`


### 6 Install CDK Dependencies

Return to root directory (this one).

Install the deps

```
npm install @aws-cdk/aws-ec2
npm install @aws-cdk/aws-ecs
npm install @aws-cdk/aws-ecr
npm install @aws-cdk/aws-ecs-patterns
```
