/* eslint-disable react/jsx-no-useless-fragment */
import React, { useCallback, useContext, useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import type { Restaurant } from './type'
import * as api from './api'

import UpdateForm from './UpdateForm'
import { appContext } from '../../Context/context'


function RestaurantCard({restaurant}:{restaurant:Restaurant | undefined}):JSX.Element {
  const {state, dispatch} = useContext(appContext)

  const [upForm, setUpForm] = useState(false)
  // const callBackForm = useCallback(setUpForm)
  // const memoUpForm = useMemo(upForm, [upForm])

  function deleteRestaurant():void{
    api.deleteFetchRestaurants(restaurant.id)
    .then(data=>dispatch({type:'DELETE_RESTAURANT', payload:data}))
    .catch(console.log)
  }

  return (
   <>
   {restaurant && 
   <>
   <Link to={`/restaurant/${restaurant.name}`}><h2>{restaurant.name }</h2></Link>
    <p>{restaurant.desc }</p>
    {!upForm && <button onClick={()=>setUpForm(!upForm)} type='button'>Изменить</button>}
    <button onClick={deleteRestaurant} type='button'>Удалить</button>
   {upForm &&  <UpdateForm upForm={upForm} setUpForm = {setUpForm} restaurant={restaurant}/>}
   </>
  }
  </>
  )
}

export default RestaurantCard

 

      