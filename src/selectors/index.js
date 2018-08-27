import { createSelector } from 'reselect'
import { Z_FILTERED } from 'zlib';

export const getTodos = state => state.todos

console.log('gettodosselector', getTodos)
export const getFilter = state => state.visibilityFilter

export const getVisibleTodos = createSelector(
    [getTodos, getFilter],
    (todos, filter) => {
        console.log('filter=',filter)
        switch (filter) {
            case 'SHOW_ALL':
                return todos

                break;
            // case 'SHOW_COMPLETED':

            //     return state.map((todo)=>{
            //         if (todo.completed)
            //         {
            //             return todo;
            //         }

            //     })
            //     break;

            default:
                return todos;
                break;
        }
    }
)