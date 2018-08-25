import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class TodoList extends Component {
  static propTypes = {
    prop: PropTypes
  }

  constructor(props) {
    super(props)
  }
  

  render() {

    console.log('??? todos=',this.props.todos);
    return (
      <div>
        hi from todolist:
        <ul>
        {this.props.todos[0]}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: typeof state === 'undefined' ? [] : state
})


export default connect(mapStateToProps, null)(TodoList)
