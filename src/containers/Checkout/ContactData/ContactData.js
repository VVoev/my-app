import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'

import classes from './ContactData.css'
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input'
class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your street'
                },
                value: ''
            },
            zip: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your zipcode'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { valie: 'fastest', displayValie: 'Fastest' },
                        { valie: 'cheapest', displayValie: 'Cheapest' }
                    ]
                },
                value: ''
            }
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
                <Input elementType="..." elementConfig="..." value="..." />
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