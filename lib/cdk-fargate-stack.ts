import * as cdk from '@aws-cdk/core';
import * as ec2 from "@aws-cdk/aws-ec2";
import * as ecs from "@aws-cdk/aws-ecs";
import * as ecr from "@aws-cdk/aws-ecr";
import * as ecs_patterns from "@aws-cdk/aws-ecs-patterns";


export class CdkFargateStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "MyVpc", {
      maxAzs: 3 // Default is all AZs in region
    });

    const cluster = new ecs.Cluster(this, "MyCluster", {
      vpc: vpc
    });

    const repo = ecr.Repository.fromRepositoryArn(this,'helloWorldRepo', 'arn:aws:ecr:us-west-2:125442796819:repository/hello-world')
    // Create a load-balanced Fargate service and make it public
    new ecs_patterns.ApplicationLoadBalancedFargateService(this, "MyFargateService", {
      cluster: cluster, // Required
      cpu: 512, // Default is 256
      desiredCount: 2, // Default is 1
      taskImageOptions: { 
        image: ecs.ContainerImage.fromEcrRepository(repo,'0.01'),
        containerPort: 3000,
      },
      //taskImageOptions: { image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample") },
      memoryLimitMiB: 256, // Default is 512
      publicLoadBalancer: true // Default is false
    });

  }
}
