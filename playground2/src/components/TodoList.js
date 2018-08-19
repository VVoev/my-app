import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, dones, selectedBtn }) => {


    return (
        <ul>
            {todos.map((todo, index) => {
                return <Todo key={index} name={todo} dones={dones} selectedBtn={selectedBtn}>{todo}</Todo>
            })}
        </ul>
    );
};

export default TodoList;