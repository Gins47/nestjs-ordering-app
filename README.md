## NestJS Microservice Project with GraphQL

command to generate an application

```bash
 nest generate app <App name>
```

An example of creating the resource

```bash
 nest generate resource
```

# Product

## Create Product

```shell
mutation{createProduct(createProductInput:{id:"223",name:"Iphone",price:5600,type:"phone"}){id,name}}
```

## Get Product

```shell
 # Query one product
 query{product(id:"223"){id,name,price}}
```

## Get All Products

```shell
query{products{id,name,price}}
```

# Docker commands

### Build images

```shell
 docker buildx build -t ginsp/ordering_app_users:latest -f ./apps/users/Dockerfile .
```

## Helm Commands

### Helm install command

```shell
 helm install ordering-app .
```

### Helm uninstall

```shell
 helm uninstall ordering-app
```

## Kubectl commands

### Expose NodePort

```shell
 kubectl expose deployment users --type='NodePort' --port=3004
```
