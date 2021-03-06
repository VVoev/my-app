import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {
    componentDidMount() {
        const userId = this.props.userId;
        this.props.onFetchOrders(this.props.token, userId);
    }

    handleDeleteClick = (id) => {
    }

    render() {
        let orders = <Spinner />
        if (!this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price}
                    delete={() => this.props.onDeleteOrder(order.id)} />

            ))
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId)),
        onDeleteOrder: (id) => dispatch(actions.deleteOrder(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));