import {PrismaClient} from '@prisma/client'
import type { CreateUserDTO } from 'domain/dtos/createUserDTO'
import type { User } from 'domain/entities/User'
import type { IUsersRepository } from 'infra/database/IUsersRepository'

export class PrismaUsersRepository implements IUsersRepository{

  constructor(private prisma:PrismaClient){}

  async create(data: CreateUserDTO): Promise<User> {
    const user = await this.prisma.create({data})
    return user;
  }
  async findById(id: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  async findByEmail(email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  async findAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  async update(id: string, data: Partial<CreateUserDTO>): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
}