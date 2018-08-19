
import * as actions from './actionTypes';

export const addTodoValue = todo => {
    return {
        type: actions.ADD_TODO,
        payload: todo
    }
}

export const markTodoAsDone = todo => {
    return {
        type: actions.MARK_TODO,
        payload: todo
    }
}