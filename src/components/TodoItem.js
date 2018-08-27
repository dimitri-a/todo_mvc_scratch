import React, { Component } from 'react'

export class TodoItem extends Component {

  render() {
    const { item, completeTodo } = this.props;
    debugger;
    console.log('item=', item.completed);
    return (
      <div>
        <input type="checkbox" onChange={() => completeTodo(item.id)} /> <span className={item.completed ? 'completed':''} >{item.id} - {item.text}</span> 
      </div>
    )
  }
}

export default TodoItem