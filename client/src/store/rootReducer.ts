import { combineReducers } from 'redux';
import questionsReducer from '../Features/Questions/redux/questionsReducer';
// import booksReducer from '../features/Books/redux/booksReducer';
// import categoriesReducer from '../features/Categories/redux/categoryReducer';
// import mainReducer from '../features/Main/redux/mainReducer';
import authReducer from '../Features/Auth/reducer/authReducer';

const rootReducer = combineReducers({
    qustionsState:questionsReducer,
// booksState:booksReducer,
// categoriesState:categoriesReducer,
// loadState:mainReducer,
authState:authReducer
});

export default rootReducer;