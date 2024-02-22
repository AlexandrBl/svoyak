import React, {  useContext, useEffect, useState } from 'react'
import * as api from './api'
import { appContext } from '../../Context/context'
import RestaurantCard from './RestaurantCard'
import AddForm from './AddForm'


function ReatarauntsList():JSX.Element {

  const {dispatch, state} = useContext(appContext)

 

  useEffect(()=>{
    api.initFetchRestaurants()
    .then(data=>dispatch({type:'INIT_RESTARAUNT', payload:data}))
    .catch(console.log)
  }, [dispatch])



  return (
    <>
    <AddForm />

    <ul className="restaurant-list">
      {state.restaurants.map(el=><RestaurantCard restaurant={el} key={el.id} />)}
      
    </ul>
    </>
    )
}

export default ReatarauntsList