import React from 'react';


const Todo = ({ name, dones, selectedBtn }) => {
    const style = dones.isDone[name] ? 'line-through' : 'none'

    let whatIsSelected = selectedBtn === 'completed' ? 'completed' : 'all';

    let result;
    if (whatIsSelected === 'all') {
        result = name
    } else if (whatIsSelected === 'completed') {
        result = dones.isDone[name] === true ? name : null;
    }
    return (
        <li data-name={name} style={{ textDecoration: style }}>{result}</li>
    )
}
export default Todo;