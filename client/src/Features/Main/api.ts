import type { UserAndId } from "../Auth/type"


export const logOut = async():Promise<{message:string, user:UserAndId}> => {
  const res = await fetch('api/auth/out')

  const data = await res.json()

  return data
}

 