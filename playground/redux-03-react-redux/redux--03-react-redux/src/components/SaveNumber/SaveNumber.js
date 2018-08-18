import React from 'react';
import './SaveNumber.css';

const saveNumber = (props) => {
    return (
        <button className="SaveNumber" onClick={props.handleThisClick}>
            {props.value}
        </button>
    )
};

export default saveNumber;