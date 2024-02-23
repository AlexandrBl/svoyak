import type { UserAndId, User, UserWithoutName } from "./type"

  export const registrationFetch = async(obj:User):Promise<{message:string,user:UserAndId}>=>{
const res = await fetch('/api/auth/reg',{
method:'POST',
headers: {
    'Content-Type': 'application/json',
  },
  body:JSON.stringify(obj)
})
const data = await res.json()
return data
  }

  export const logFetch = async(obj:UserWithoutName):Promise<{message:string,user:UserAndId}>=>{
    const res = await fetch('/api/auth/log',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(obj)
    })
    const data = await res.json()
    return data
      }