import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos: [],
    isDone: {}
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            }
        case actionTypes.MARK_TODO: {
            const isTodoDone = state.todos.find(t => t === action.payload)
            const isAlreadyDone = state['isDone'][isTodoDone];
            return {
                ...state,
                ...state['isDone'][isTodoDone] = !isAlreadyDone
            }
        }

        default:
            return state;
    }

}

export default todosReducer;