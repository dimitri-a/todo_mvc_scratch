import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import inputText from '../components/InputText'

export class InputText extends Component {
  static propTypes = {
    prop: PropTypes
  }

}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  addTodo:addTodo
}

export default connect(mapStateToProps, {addTodo})(inputText)
