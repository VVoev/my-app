import React from 'react';
import Result from './Result';

const Results = (props) => {
    return (
        <ul>
            {props.results.map((r, i) => {
                return <Result key={i} number={r} natisnat={(r) => props.cuknat(r)}></Result>
            })}
        </ul>
    );
};

export default Results;