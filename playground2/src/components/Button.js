import React from 'react';
const styles = {
    margin: '3px',
    backgroundColor: 'pink'
}

const Button = ({ name, selected }, props) => {
    return (
        name === selected ?
            <button value={name} disabled style={styles} onClick={() => props.buttonClicked}>
                {name}
            </button> : <button value={name} style={styles} onClick={() => props.buttonClicked}>
                {name}
            </button>
    );
};

export default Button;