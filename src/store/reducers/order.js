import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility'

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const purchaseInit = (state, action) => {
    return updateObject(state, { purchased: false })
}

const purchaseStart = (state, action) => {
    return updateObject(state, { loading: true })
}

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, { id: action.orderId });
    return updateObject(state, {
        loading: false,
        order: state.orders.concat(newOrder),
        purchased: true
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START: return purchaseStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAILED: return updateObject(state, { loading: false })
        case actionTypes.FETCH_ORDERS_START: return updateObject(state, { loading: true })
        case actionTypes.FETCH_ORDERS_SUCCESS: return updateObject(state, { orders: action.orders, loading: false })
        case actionTypes.FETCH_ORDERS_FAILED: return updateObject(state, { error: action.error, loading: false })
        case actionTypes.DELETE_ORDER: return updateObject(state, { orders: action.orders })
        case actionTypes.DELETE_ORDER_FAILED: return updateObject(state, { error: action.err });
        default: return state;
    }
}

export default reducer;