import React from 'react';
import AddTodo from '../containers/AddTodo';
import FooterOptions from '../containers/FooterOptions';
import Greeter from '../containers/Greeter';


const App = () => {
    return (
        <div>
            <AddTodo />
            <FooterOptions buttons={['all', 'active', 'completed']} />
            <Greeter />
        </div>
    );
};

export default App;