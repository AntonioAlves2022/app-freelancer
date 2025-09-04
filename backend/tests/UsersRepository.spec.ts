import { InMemoryUsersRepositoryImpl } from 'infra/repositories/in-memory/InMemoryUsersRepository'
import {describe, expect, it} from 'vitest'


describe('UsersRepository',()=>{
  // Escreva os testes aqui...
  it('Should be able to create a new user and find it by id',
    async()=>{
      const repo = new InMemoryUsersRepositoryImpl()
      const user = await repo.create({
        name:'Antonio',
        email:'antonio@teste.com.br',
        password:'12345678',
        avatarUrl:'./profile/foto.jpeg',
      })
      const userExists = await repo.findById(user.id)

      expect(userExists).toBeDefined()
      expect(userExists?.email).toBe('antonio@teste.com.br')
    }
  ) // fim do teste 1

})