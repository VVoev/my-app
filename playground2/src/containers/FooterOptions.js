import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { addButtonValue, selectedButtonValue } from '../actions/buttons';




class FooterOptions extends Component {

    componentWillMount = () => {
        const { buttons } = this.props;
        buttons.map(b => this.props.addButton(b));
    }

    handleClick = (e) => {
        this.props.selectedButton(e.target.value);

    }
    render() {
        const { buttons } = this.props;
        return (
            <div onClick={(e) => this.handleClick(e)} >
                Show:
                {buttons.map((b, index) => {
                    return <Button key={index} selected={this.props.selected} name={b} buttonClicked={(name) => this.handleClick(name)} />
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selected: state.buttons.selected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addButton: (button) => dispatch(addButtonValue(button)),
        selectedButton: (button) => dispatch(selectedButtonValue(button))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterOptions);