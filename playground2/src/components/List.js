import React from 'react';

const List = (props) => {
    const { languages } = props;
    return (languages.map((l) => {
        return <li key={l} onClick={() => props.clicked(l)}>{l}</li>
    })
    );
};

export default List;