
import * as actions from './actionTypes';

export const addTodoValue = todo => {
    return {
        type: actions.ADD_TODO,
        payload: todo
    }
}