import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class TodoList extends Component {
  static propTypes = {
    prop: PropTypes
  }


  render() {


console.log('this.props.todos',this.props.todos);

    return (
      <div>
        hi from todolist:
        <ul>

          {this.props.todos.map((todo)=>{
            <li>{todo}</li>
          })}

        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.items.length > 0 ? state.items : []
})


export default connect(mapStateToProps, null)(TodoList)
