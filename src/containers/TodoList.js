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
        hi from todolist:
        <ul>
          
          {this.todos.map}

        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.items.length > 0 ? state : []
})


export default connect(mapStateToProps, null)(TodoList)
