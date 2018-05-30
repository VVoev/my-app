import React from 'react';
import classes from './Input.css'

const Input = (props) => {
    let inputElem = null;


    switch (props.elementType) {
        case ('input'):
            inputElem = <input className={classes.inputElem} {...props.elementConfig} value={props.value} />
            break;
        case ('textarea'):
            inputElem = <textarea className={classes.inputElem} {...props.elementConfig} value={props.value} />
            break;
        default:
            inputElem = <input className={classes.inputElem} {...props.elementConfig} value={props.value} />
            break;

    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElem}
        </div>
    );
};

export default Input;