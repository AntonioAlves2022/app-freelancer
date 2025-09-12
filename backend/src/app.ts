import  Fastify  from 'fastify'
import { jwtPlugin } from 'plugins/jwt'
import prismaPlugin from 'plugins/prisma'

export async function builApp(){
  const app = Fastify({logger:true})

  app.get('/api', ()=>{
    return {message: 'Hi People'}
  })
  app.register(prismaPlugin)
  app.register(jwtPlugin)
  return app
}