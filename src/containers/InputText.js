import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from '../components/InputText'
import { addTodo } from '../actions/addTodoAction'

export class InputText extends Component {
  static propTypes = {
    prop: PropTypes
  }
}

export default connect(null, {addTodo})(Input)
