import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class TodoList extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        hi from todolist
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
