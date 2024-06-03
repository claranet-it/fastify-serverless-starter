provider "aws" {
  region = var.region
}

terraform {
  required_providers {
    aws = {
      version = ">= 5.5.0"
      source  = "hashicorp/aws"
    }
  }

  required_version = "~> 1.0"

  backend "s3" {
    bucket         = "fastify-sls-starter-dev-tfstate"
    key            = "fastifys-sls-starter-dev/terraform.tfstate"
    dynamodb_table = "fastify-sls-starter-dev-tfstate-locks"
    region         = "eu-west-1"
    encrypt        = true
  }
}
