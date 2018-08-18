import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodoValue } from '../actions/todos'
import TodoList from '../components/TodoList';

class AddTodo extends Component {

    state = {
        value: ''
    }

    handleInputField = (e) => {
        this.setState({ value: e.target.value })
    }

    submitTostore = () => {
        this.props.addTodo(this.state.value)
    }
    render() {
        return (
            <div>
                <input onChange={this.handleInputField} />
                <button onClick={this.submitTostore}> Add Todo</button>
                <TodoList todos={this.props.todos} />
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (todo) => dispatch(addTodoValue(todo)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);