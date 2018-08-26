// import React, { Component } from 'react'

// import { completeTodo } from "../actions/addTodoAction";

// export default class TodoListItems extends Component {
//     constructor(props) {
//         super(props)
//     }

//     completeTodo = (todo)=>{
//         debugger
//         this.props.completeTodo(todo)
//     }

//     render() {
//         console.log('this.props.todos tl comp', this.props.todos);
//         return (
//             {
//                 this.props.todos.map((t)=> <TodoItem todo={t}></TodoItem>)
//             }
//         )
//     }
// }

import React from 'react'
import TodoItem from './TodoItem';

export default ({todos,completeTodo}) => {
  return (
    <ul>
      {todos.map((todo)=><TodoItem todo={todo}/>)}
    </ul>
  )
}


















// const TodoList = ({ filteredTodos, actions }) => (
//     <ul className="todo-list">
//       {filteredTodos.map(todo =>
//         <TodoItem key={todo.id} todo={todo} {...actions} />
//       )}
//     </ul>
//   )
