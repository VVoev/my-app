import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { incrementValue, decrementValue } from '../../store/actions/calculate';

class Counter extends Component {

    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }


    //TODO AFTER ALL IS IMPLEMENTED WITH REDUX SWITCH CASE SHOULD BE REMOVED
    //FLOW  this.props.{nameOfFunctions} => action{nameOfFunction} => reducer{listeningForActionType}
    render() {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment 1" clicked={() => this.props.incrementCounterWithOne(1)} />
                <CounterControl label="Decrement 1" clicked={() => this.props.decrementCounterWithOne(1)} />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler('add', 5)} />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler('sub', 5)} />
            </div>
        );
    }
}

//Taking from the global state
const mapStateToProps = state => {
    return {
        counter: state.calculate.counter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounterWithOne: value => dispatch(incrementValue(value)),
        decrementCounterWithOne: value => dispatch(decrementValue(value))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);