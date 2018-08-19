import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodoValue, markTodoAsDone } from '../actions/todos'
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

    handleTodo = (e) => {
        const elem = e.target.getAttribute('data-name');
        if (elem !== null) {
            this.props.markTodo(elem);
        }
    }

    render() {
        return (
            <div onClick={this.handleTodo}>
                <input onChange={this.handleInputField} />
                <button onClick={this.submitTostore}> Add Todo</button>
                <TodoList todos={this.props.todos} dones={this.props.doneTodos} selectedBtn={this.props.selectedBtn} />
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos.todos,
        doneTodos: state.todos,
        selectedBtn: state.buttons.selected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (todo) => dispatch(addTodoValue(todo)),
        markTodo: (todo) => dispatch(markTodoAsDone(todo))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);