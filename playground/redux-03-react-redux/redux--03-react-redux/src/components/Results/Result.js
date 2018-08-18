import React from 'react';

const Result = (props) => {
    return (
        <li onClick={() => props.natisnat(props.number)}>{props.number}</li>
    );
};

export default Result;