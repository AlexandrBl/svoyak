import type { StateQuestions, StateThemes } from "../type"
import type { Action } from "./action"


const init = {themes:[]}
const themesReducer = (state:StateThemes=init,action:Action):StateThemes=> {
switch (action.type) {
    case 'themes/init':
        return {
            ...state,
            themes:action.payload
        }

    default:
        return state
}
}

export default themesReducer