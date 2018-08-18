import * as actions from './actionTypes';

export const setNumber = number => {
    return {
        type: actions.SET_NUMBER_GLOBALLY,
        payload: number
    }
}

export const saveNumber = number => {
    return {
        type: actions.SAVENUMBER,
        payload: number
    }
}

export const deleteValue = number => {
    return {
        type: actions.DELETEVALUE,
        payload: number,
    }
}