import React, { Component } from 'react';

import Hoc from '../../hoc/Hoc';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <Hoc>
                <Burger />
                <div>Build Controls</div>
            </Hoc>
        );
    }
}

export default BurgerBuilder;