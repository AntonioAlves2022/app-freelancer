export interface UserProps{
  id?:string
  name:string
  email:string
  password:string
  avatarUrl?:string
  createdAt?:Date
}

export class User{
  private props:UserProps
  constructor(props:UserProps){
    this.props = {
      ...props,
      id:props.id??crypto.randomUUID(),
      createdAt:props.createdAt??new Date()
    }
  }

<<<<<<< HEAD
  get id() {return this.props.id!}
=======
  get id() {return this.props.id}
>>>>>>> bfb36d6336a311847a24252f66b5aec70c86a1ae
  get name() {return this.props.name}
  get email() {return this.props.email}
  get password() {return this.props.password}
  get avatarUrl() {return this.props.avatarUrl}
  get createdAt() {return this.props.createdAt}
}