import { combineReducers } from 'redux';
import questionsReducer from '../Features/Questions/redux/questionsReducer';
import authReducer from '../Features/Auth/reducer/authReducer';

const rootReducer = combineReducers({
    qustionsState:questionsReducer,
    authState:authReducer
});

export default rootReducer;