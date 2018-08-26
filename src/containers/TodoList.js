import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoListItems from '../components/TodoListItems'
import {completeTodo} from '../actions/addTodoAction'

export class TodoList extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    console.log('this.props.todos tl cont', this.props.todos);

    return (
      <div>
        <TodoListItems todos={this.props.todos} completeTodo={completeTodo} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state
})


export default connect(mapStateToProps, {completeTodo})(TodoList)
