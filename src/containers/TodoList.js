import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoListItems from '../components/TodoListItems'
// import {completeTodo} from '../actions/addTodoAction'

import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'

export class TodoList extends Component {
  static propTypes = {
    prop: PropTypes
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps )(TodoListItems)



