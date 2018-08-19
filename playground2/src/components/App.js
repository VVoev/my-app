import React from 'react';
import AddTodo from '../containers/AddTodo';
import FooterOptions from '../containers/FooterOptions';


const App = () => {
    return (
        <div>
            <AddTodo />
            <FooterOptions buttons={['all', 'active', 'completed']} />
        </div>
    );
};

export default App;