import React, { Component } from 'react'

export class TodoItem extends Component {

  render() {
    const { item, completeTodo } = this.props;
    debugger;
    console.log('item=', item);
    return (
      <div>
        <input type="checkbox" onChange={() => completeTodo(item.id)} /> {item.id} - {item.text}
      </div>
    )
  }
}

export default TodoItem