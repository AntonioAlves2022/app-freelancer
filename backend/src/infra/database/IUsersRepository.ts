// Interface: Arquivo com métodos abstratos
// Método abstrato é um método sem implementação
import {CreateUserDTO} from '../../domain/dtos/createUserDTO'
import {User} from '../../domain/entities/User'
export interface IUsersRepository{
  create(data:CreateUserDTO):Promise<User>
  findById(id:string):Promise<User|null>
  findByEmail(email:string):Promise<User|null>
  findAll():Promise<User[]>
  update(id:string, data:Partial<CreateUserDTO>):Promise<User|null>
  delete(id:string):Promise<void>
}