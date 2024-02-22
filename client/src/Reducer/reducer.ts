import type { Action } from "./actionTypes";

import type { State } from "./type";

export const init = {restaurants: []}

const reducer = (state: State, action: Action): State => {
  switch(action.type){
    case 'INIT_RESTARAUNT':
      return{
        ...state,
        restaurants: action.payload
      }
    case 'ADD_RESTARAUNT':
      return{
        ...state,
        restaurants: [...state.restaurants, action.payload]
      }
    case 'UPDATE_RESTARAUNT':
      return{
        ...state,
        restaurants: state.restaurants.map(el=>{
          if(el.id === action.payload.id){
            el = action.payload
            return el
           } 
             return el
           
         })
       }

    case 'DELETE_RESTAURANT':
      return {
        ...state,
        restaurants: state.restaurants.filter(el=> el.id !== action.payload.id)
      }

    default:
      return state
  }
    
}

export default reducer