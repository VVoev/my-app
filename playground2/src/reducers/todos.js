import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos: []
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            }

        default:
            return state;
    }

}

export default todosReducer;