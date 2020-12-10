# Docker 101

### 1 Write the Dockerfile

See container Dockerfile

https://docs.docker.com/engine/reference/builder/

### 2 Build The Container

`docker build -t hello-world:0.01 .`

See the container in your local registry:

`docker images`

### Run the Container

Run the container in attached mode:

`docker run -it -p 3000:3000 --name=hello-world hello-world:0.01`

Run the container in detached mode:

`docker run -d -p 3000:3000 --name=hello-world hello-world:0.01`

See the logs:

`docker logs hello-world`

Tail the logs:

`docker logs -f hello-world`

Attach to it (to run other commands inside)

`docker exec -it hello-world /bin/sh`

### Stop the Container

`docker stop hello-world`

Clean up:

`docker rm hello-world`

More Reference: https://docs.docker.com/engine/reference/run/

# Amazon ECR

```
aws ecr create-repository --repository-name hello-world --image-scanning-configuration scanOnPush=true

docker tag hello-world:0.01 125442796819.dkr.ecr.us-west-2.amazonaws.com/hello-world:0.01

aws ecr get-login-password | docker login --username AWS --password-stdin 125442796819.dkr.ecr.us-west-2.amazonaws.com

docker push 125442796819.dkr.ecr.us-west-2.amazonaws.com/hello-world:0.01
```