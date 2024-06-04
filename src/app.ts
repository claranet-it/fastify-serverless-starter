import { join } from 'path'
import AutoLoad, { AutoloadPluginOptions } from '@fastify/autoload'
import { FastifyPluginAsync, FastifyServerOptions } from 'fastify'
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'

export interface AppOptions
  extends FastifyServerOptions,
    Partial<AutoloadPluginOptions> {}
// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {}

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts,
): Promise<void> => {
  fastify.register(swagger, {
    swagger: {
      info: {
        title: 'Fastify Serverless Starter',
        description: 'Fastify Serverless Starter',
        version: '0.2.0',
      },
      // securityDefinitions: {
      //   apiKey: {
      //     type: 'apiKey',
      //     name: 'Authorization',
      //     in: 'header',
      //   },
      // },
    },
  })

  fastify.register(swaggerUI)

  // void fastify.register(AutoLoad, {
  //   dir: join(__dirname, 'plugins'),
  //   options: opts
  // })

  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts,
  })
}

export default app
export { app, options }
