const initialState = { todos: [] }

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      debugger
      return { ...state, todos: [...state.items, action.param] };

    default:
      debugger
      return state
  }
}
