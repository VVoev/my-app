import React from 'react';
import Hoc from '../../../hoc/Hoc'

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{props.ingredients[igKey]}</li>
            )
        })
    return (
        <Hoc>
            <h3>Your Order</h3>
            <p>A delicius buger with following:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Hoc>
    );
};

export default OrderSummary;