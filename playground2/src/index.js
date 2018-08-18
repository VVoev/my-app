import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;


const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)