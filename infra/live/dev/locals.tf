locals {
  app = {
    name        = "fastify-sls-starter-${var.stage}"
    description = "Fastify Serverless Starter application"
  }

  lambda = {
    main = {
      handler    = "lambda.handler"
      source_dir = "../../../dist"
    }
  }

  layer = {
    dependencies = {
      name        = "fastify-sls-starter-${var.stage}-dependencies"
      description = "Fastify Serverless Starter Dependencies Layer"
      build_dir   = "../../build/layers"
    }
  }

  tags = {
    Owner   = "Massimo Biagioli"
    Destroy = "false"
  }
}