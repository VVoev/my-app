
import List from './List';

import React from 'react';

const LanguageList = props => {


    const languages = ['bulgarian', 'english', 'chinese'];
    return (
        <div>LanguageList
                <ul>
                <List languages={languages} clicked={(name) => props.listClicked(name)} />
            </ul>
        </div>
    );
}

export default LanguageList;