import {FastifyRequest, FastifyReply} from 'fastify'
import {z} from 'zod'
import {CreateUserUsecase} from '../../domain/usecases/users/CreateUserUsecase'
import {createUserSchema, CreateUserDTO} from '../../domain/dtos/createUserDTO' 
import type {CreateUserRequest} from 'types/index'

function isZodError(error:unknown):error is z.ZodError{
  return error instanceof z.ZodError
}

export class CreateUserController{
  constructor(private usecase:CreateUserUsecase){}
  async handle(req:CreateUserRequest, reply:FastifyReply):Promise<FastifyReply>{
    try{
      
    }
  }
}