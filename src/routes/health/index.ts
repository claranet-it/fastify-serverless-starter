import { FastifyPluginAsync } from 'fastify'

const health: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/', async function () {
    return { status: 'ok' }
  })
}

export default health
