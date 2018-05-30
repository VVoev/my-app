import React from 'react';
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css'

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Enjoy your burger</h1>
            <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked={props.onCheckoutCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.onCheckoutContinue}>SUCCESS</Button>
        </div>
    );
};

export default CheckoutSummary;