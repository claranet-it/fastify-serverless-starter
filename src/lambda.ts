import awsLambdaFastify from '@fastify/aws-lambda'
import app from './app'
import fastify from 'fastify'

const fastifyApp = fastify({ logger: true })
fastifyApp.register(app)

export const handler = awsLambdaFastify(fastifyApp)
