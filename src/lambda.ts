import awsLambdaFastify from '@fastify/aws-lambda'
import app from './app'
import fastify from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

const fastifyApp = fastify({
  logger: true,
}).withTypeProvider<TypeBoxTypeProvider>()
fastifyApp.register(app)

export const handler = awsLambdaFastify(fastifyApp)
