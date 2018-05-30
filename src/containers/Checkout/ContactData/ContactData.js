import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'

import classes from './ContactData.css'
import Spinner from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            stret: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Backo Kiko weeee",
                adress: {
                    street: "Bulgaristan",
                    zip: 1000,
                }, email: 'backoKiko@abv.bg'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(res => {
                this.setState({ loading: false })
                this.props.history.push('/');
            }).catch(err => {
                this.setState({ loading: false })
                console.log(err);
            })
    }
    render() {


        let form = this.state.loading ? <Spinner /> : (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                <input className={classes.Input} type="text" name="street" placeholder="Your street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Your street" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        )
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;