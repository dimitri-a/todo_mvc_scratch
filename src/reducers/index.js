const initialState = [{id:0,text:"first todoitem",completed:false}]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      debugger
      return [...state, action.param]

    case 'COMPLETE_TODO':
      debugger
      return { ...state, todos: [...state.todos, action.param] };

    default:
      debugger
      return state
  }
}
