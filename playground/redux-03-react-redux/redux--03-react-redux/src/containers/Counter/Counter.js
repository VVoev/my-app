import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import SaveNumber from '../../components/SaveNumber/SaveNumber'
import Input from '../../components/Input/Input';
import Results from '../../components/Results/Results'

import { incrementValue, decrementValue, multiplyValue, deductValue, squareValue, squareRoot } from '../../store/actions/calculate';
import { saveNumber, deleteValue } from '../../store/actions/number'

class Counter extends Component {

    //TODO AFTER ALL IS IMPLEMENTED WITH REDUX SWITCH CASE SHOULD BE REMOVED
    //FLOW  this.props.{nameOfFunctions} => action{nameOfFunction} => reducer{listeningForActionType}

    megaClick = () => {
        this.props.saveResult(this.props.counter)
    }

    handleMe = (number) => {
        debugger;
        this.props.deleteNumber(number);
    }


    render() {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={() => this.props.incrementCounter(this.props.number)} />
                <CounterControl label="Decrement" clicked={() => this.props.decrementCounter(this.props.number)} />
                <CounterControl label="Multiply" clicked={() => this.props.multiply((this.props.number))} />
                <CounterControl label="Deduct" clicked={() => this.props.deduct(this.props.number)} />
                <CounterControl label="Square" clicked={() => this.props.square(this.props.counter)} />
                <CounterControl label="Square root" clicked={() => this.props.squareRoot(this.props.number)} />
                <Input textToDisplay={this.props.number} />
                <SaveNumber number={this.props.number} value="Save" handleThisClick={this.megaClick} />
                <Results results={this.props.savedNumbers} cuknat={(x) => this.handleMe(x)} />
            </div>
        );
    }
}

//Taking from the global state
const mapStateToProps = state => {
    return {
        counter: state.calculate.counter,
        number: state.number.number,
        savedNumbers: state.number.savedNumbers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: value => dispatch(incrementValue(value)),
        decrementCounter: value => dispatch(decrementValue(value)),
        multiply: value => dispatch(multiplyValue(value)),
        deduct: value => dispatch(deductValue(value)),

        square: value => dispatch(squareValue(value)),

        squareRoot: number => dispatch(squareRoot(number)),

        saveResult: value => dispatch(saveNumber(value)),
        deleteNumber: (value) => dispatch(deleteValue(value))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);