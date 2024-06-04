import { FastifyPluginAsync } from 'fastify'
import {HealthResponse, HealthResponseType} from "../../models/health";

const health: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get<{ Reply: HealthResponseType }>(
    '/',
    {
      schema: {
        tags: ['Health'],
        response: {
          200: HealthResponse,
        },
      },
    },
    async () => {
      return { status: 'ok' }
    },
  )
}

export default health
