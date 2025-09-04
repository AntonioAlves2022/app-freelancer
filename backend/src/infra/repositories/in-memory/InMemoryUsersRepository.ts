import type { CreateUserDTO } from 'domain/dtos/createUserDTO'
import { User } from 'domain/entities/User'
import type { IUsersRepository } from 'infra/database/IUsersRepository'

export class InMemoryUsersRepositoryImpl implements IUsersRepository{
  private users:User[] = [] // banco de dados fake
  async create(data: CreateUserDTO): Promise<User> {
    const user = new User({...data}) //spread operator
    this.users.push(user) // push: insere algo no array
    return user // retornando o usuario que eu crie
  }
  async findById(id: string): Promise<User | null> {
    // find busca algo dentro do array
    return this.users.find(u=>u.id === id) ?? null
  }
  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(u=>u.email === email) ?? null
  }
  async findAll(): Promise<User[]> {
    return this.users
  }
  async update(id: string, data: Partial<CreateUserDTO>): Promise<User|null> {
    const userIdx = this.users.findIndex(u=>u.id === id)
    if(userIdx === -1) return null // usuario inexistente
    const oldUser = this.users[userIdx] // dados antigos
    const updatedUser = new User({
      id:oldUser.id,
      name:data.name ?? oldUser.name,
      email:data.email ?? oldUser.email,
      password:data.password ?? oldUser.password,
      avatarUrl:data.avatarUrl ?? oldUser.avatarUrl,
      createdAt:oldUser.createdAt
    })

    this.users[userIdx] = updatedUser // atualiza os dados
    return updatedUser

  }
  async delete(id: string): Promise<void> {
    this.users.filter(u=> u.id !== id)
  }
  
}