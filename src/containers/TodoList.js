import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoListItems from '../components/TodoListItems'

export class TodoList extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    console.log('this.props.todos', this.props.todos);

    return (
      <div>
        <TodoListItems todos={this.todos} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})


export default connect(mapStateToProps, null)(TodoList)
