import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { incrementCounter } from './actions/counterAction';

export class Counter extends Component {
  static propTypes = {
    prop: PropTypes
  }

  handleClick = () => {
      this.props.incrementCounter;
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
    counter:state
})



export default connect(mapStateToProps, incrementCounter)(Counter)
