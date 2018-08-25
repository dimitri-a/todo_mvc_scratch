const initialState = { todos: [] }

export default (state = {todos:['first todo']}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      debugger
      return { ...state, todos: [...state.todos, action.param] };

    default:
      debugger
      return state
  }
}
