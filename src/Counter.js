import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { incrementCounter } from './actions/counterAction.js';

export class Counter extends Component {
    constructor(props) {
        super(props);
      }
   
    handleClick = () => {
        debugger;
        this.props.incrementCounter();
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                hello this is counter:{this.props.counter}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    counter: state
})



export default connect(mapStateToProps, { incrementCounter })(Counter)
