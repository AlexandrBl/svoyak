import React, { useContext, useState } from 'react'
import { appContext } from '../../Context/context'
import * as api from './api'

function AddForm():JSX.Element {

  const {state, dispatch} = useContext(appContext)

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')

  function addRestaurants(event:React.FormEvent<HTMLFormElement>):void{
    event.preventDefault()

    api.addFetchRestaurants(name, desc)
    .then(data=>dispatch({type:'ADD_RESTARAUNT', payload:data}))
    .catch(console.log)

    setName('')
    setDesc('')
  }

  return (
    <form onSubmit={addRestaurants}  className="add-form">
      <input onChange={(e)=>setName(e.target.value)} type="text" className="add-form__input" placeholder='name' value={name} />
      <input onChange={(e)=>setDesc(e.target.value)} type="text" className="add-form__input" placeholder='desc' value={desc}/>
      <button type='submit' className="add-form__button">Добавить</button>
    </form>
  )
}

export default AddForm