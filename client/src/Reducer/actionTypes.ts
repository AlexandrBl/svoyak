import type {Restaurant} from '../Features/Restaurants/type'

export type Action = 
{type: 'INIT_RESTARAUNT', payload: Restaurant[]}
| {type: 'ADD_RESTARAUNT', payload: Restaurant}
| {type: 'UPDATE_RESTARAUNT', payload: Restaurant}
| {type: 'DELETE_RESTAURANT', payload: Restaurant}