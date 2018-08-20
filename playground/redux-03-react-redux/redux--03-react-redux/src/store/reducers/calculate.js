import * as actionTypes from '../actions/actionTypes';

const initialState = {
    counter: 0
}


const reducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                counter: state.counter + action.payload
            }
        case actionTypes.DECREMENT:
            return {
                counter: state.counter - action.payload
            }
        case actionTypes.MULTIPLY: {
            return {
                counter: state.counter * action.payload
            }
        }

        case actionTypes.DEDUCT: {
            return {
                counter: state.counter / action.payload
            }
        }

        case actionTypes.SQUARE: {
            return {
                counter: state.counter * action.payload
            }
        }

        case actionTypes.SQUAREROOT: {
            return {
                counter: Math.sqrt(state.counter)
            }
        }

        default:
            return state;
    }

}

export default reducer;