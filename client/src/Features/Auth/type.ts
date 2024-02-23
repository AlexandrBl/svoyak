export type User = {
  name: string;
  email: string;
  password: string
  score:number
}

export type UserWithoutName = Omit<User, 'name'>

export type UserAndId = User & {id:number}

export type StateAuth = {
  user: null | User;
  message:string
}