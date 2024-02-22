import React, { useContext, useState } from 'react'
import { appContext } from '../../Context/context'
import * as api from './api'
import type { Restaurant } from './type'

function UpdateForm( {upForm, setUpForm ,restaurant}:{upForm:boolean, setUpForm:()=>{}, restaurant:Restaurant}):JSX.Element {

  const {state, dispatch} = useContext(appContext)

  const [name, setName] = useState(restaurant.name)
  const [desc, setDesc] = useState(restaurant.desc)
  

  let {id} = restaurant
  id = +id

  function updateRestaurants(event:React.FormEvent<HTMLFormElement>):void{
    event.preventDefault()

    api.updateFetchRestaurants(name, desc, id)
    .then(data=>dispatch({type:'UPDATE_RESTARAUNT', payload:data}))
    .catch(console.log)

    setUpForm(!upForm)
    setName('')
    setDesc('')
  }

  return (
    <form onSubmit={updateRestaurants}  className="add-form">
      <input onChange={(e)=>setName(e.target.value)} type="text" className="add-form__input" placeholder='name' value={name} />
      <input onChange={(e)=>setDesc(e.target.value)} type="text" className="add-form__input" placeholder='desc' value={desc}/>
      <button type='submit' className="add-form__button">Применить</button>
    </form>
  )
}

export default UpdateForm