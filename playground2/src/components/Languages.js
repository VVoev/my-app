import React from 'react';

const Languages = (props) => {


    function sum(a) {
        return a * a;
    }
    return (
        <div>show the list
            <br />
            <button onClick={props.clicked}>Click to see options </button>
            {sum(23)}
        </div>
    );
};

export default Languages;