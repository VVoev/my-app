import React from 'react';
import Hoc from '../../../hoc/Hoc'
import Button from '../../UI/Button/Button'

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
            <h3>Total Price:{props.price} $</h3>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Hoc>
    );
};

export default OrderSummary;