/**
 * La Base Game Server
 * Entry point
 */

import Fastify from 'fastify';
import { createServer } from 'http';

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || '0.0.0.0';

async function start() {
  const fastify = Fastify({
    logger: true,
  });

  // Health check endpoint
  fastify.get('/health', async (request, reply) => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  });

  // Placeholder API routes
  fastify.get('/api/version', async (request, reply) => {
    return { version: '0.1.0' };
  });

  try {
    await fastify.listen({ port: PORT, host: HOST });
    console.log(`Server running on http://${HOST}:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
