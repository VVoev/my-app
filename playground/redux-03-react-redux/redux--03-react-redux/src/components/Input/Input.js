import './Input.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setNumber } from '../../store/actions/number';

class Input extends Component {

    render() {
        return (
            <input className="Input" value={this.props.currentNumber} onChange={(e) => this.props.setNumberGlobally(e.target.value)}>
            </input>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentNumber: state.number.number
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setNumberGlobally: value => dispatch(setNumber(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);