import * as actionTypes from '../actions/actionTypes';

const initialState = {
    buttons: [],
    selected: 'all'
}

const buttonReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_BUTTON:
            return {
                ...state,
                buttons: state.buttons.concat(action.payload)
            }
        case actionTypes.SELECTED_BUTTON:
            const selected = state.buttons.find(b => b === action.payload)
            return {
                ...state,
                selected: selected
            }
        default:
            return state;
    }

}

export default buttonReducer;