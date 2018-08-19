import { combineReducers } from 'redux'
import todosReducer from './todos'
import buttonReducer from './buttons';



export default combineReducers({
    todos: todosReducer,
    buttons: buttonReducer
})