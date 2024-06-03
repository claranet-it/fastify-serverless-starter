import { FastifyPluginAsync } from "fastify"

const health: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return { status: 'health ok' }
  })
}

export default health;
