import React from 'react'
import TodoItem from './TodoItem';

export default ({ filteredTodos, actions }) => {
    console.log('filterd todos in comp', filteredTodos)
    // debugger
    return (
        <ul>
            {filteredTodos.map((todo) => <TodoItem item={todo} {...actions} />)}
        </ul>
    )
}