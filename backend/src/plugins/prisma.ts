import fp from 'fastify-plugin'
import {PrismaClient} from '@prisma/client'

export default fp(async(app)=>{
  const prisma = new PrismaClient()
  app.addHook('onClose', async()=>{
    await prisma.$disconnect()
  })
  app.decorate('prisma',prisma) //app.prisma
})

// Override (sobreescrita de metodo)
declare module 'fastify'{
  interface FastifyInstace{
    prisma:PrismaClient
  }
}