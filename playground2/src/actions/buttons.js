import * as actions from './actionTypes';

export const addButtonValue = button => {
    return {
        type: actions.ADD_BUTTON,
        payload: button
    }
}

export const selectedButtonValue = button => {
    return {
        type: actions.SELECTED_BUTTON,
        payload: button
    }
}