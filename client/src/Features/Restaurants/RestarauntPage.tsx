import React, {  useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import { appContext } from '../../Context/context'
import RestaurantCard from './RestaurantCard'

function RestarauntPage():JSX.Element {
  const {state} = useContext(appContext)
  const {name} = useParams()
  const navigate = useNavigate()

  const restaraunt = state.restaurants.find(el=> el.name === name)

 
  return (
    <>
    <button type='button' onClick={()=>navigate(-1)}>назад</button>
    <RestaurantCard restaurant={restaraunt}/>
    </>
  )
}

export default RestarauntPage