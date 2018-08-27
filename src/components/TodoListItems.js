import React from 'react'
import TodoItem from './TodoItem';

export default ({ todos, actions }) => {
    console.log('hier', todos[0])
    debugger
    return (
        <ul>
            {todos.map((todo) => <TodoItem item={todo} {...actions} />)}
        </ul>
    )
}