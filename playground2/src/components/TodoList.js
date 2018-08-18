import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    const { todos } = props;
    return (
        <ul>
            {todos.map((todo, index) => {
                return <Todo key={index}>{todo}</Todo>
            })}
        </ul>
    );
};

export default TodoList;