import React from 'react'
import TodoItem from './TodoItem';

export default ({ todos, completeTodo }) => {
    console.log('todos', todos[0])
    return (
        <ul>
            {todos.map((todo) => <TodoItem item={todo} action={completeTodo} />)}
        </ul>
    )
}