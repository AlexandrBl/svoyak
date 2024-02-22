import type { Restaurant } from "./type";


export const initFetchRestaurants = async():Promise<Restaurant[]>=>{
  const res = await fetch('https://65d33c07522627d501085e18.mockapi.io/restaurant')

  const data = await res.json()

  return data
} 

export const addFetchRestaurants = async(name:string, desc:string):Promise<Restaurant>=> {
  const res = await fetch('https://65d33c07522627d501085e18.mockapi.io/restaurant', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body:JSON.stringify({
      name,
      desc,
      rate: 0
    })
  })

  const data = res.json()

  return data
} 

export const updateFetchRestaurants = async(name:string, desc:string, id:number):Promise<Restaurant>=> {
  const res = await fetch(`https://65d33c07522627d501085e18.mockapi.io/restaurant/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body:JSON.stringify({
      name,
      desc,
      rate: 0
    })
  })

  const data = res.json()

  return data
} 

export const deleteFetchRestaurants = async(id:number):Promise<Restaurant>=> {
  const res = await fetch(`https://65d33c07522627d501085e18.mockapi.io/restaurant/${id}`, {
    method: 'DELETE',
  })

  const data = res.json()

  return data
} 