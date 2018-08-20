import * as actionTypes from '../actions/actionTypes';

const initialState = {
    number: 0,
    savedNumbers: []
}


const numberReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case actionTypes.SET_NUMBER_GLOBALLY:
            return {
                ...state,
                number: +action.payload
            }
        case actionTypes.SAVENUMBER:
            return {
                ...state,
                savedNumbers: state.savedNumbers.concat(action.payload)
            }
        case actionTypes.DELETEVALUE:
            return {
                ...state,
                savedNumbers: state.savedNumbers.filter(n => n !== action.payload)
            }

        default:
            return state;
    }

}

export default numberReducer;