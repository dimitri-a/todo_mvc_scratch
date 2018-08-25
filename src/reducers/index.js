const initialState = ['hhellllo']

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      debugger
      return [...state, action.payload]

    default:
      return state
  }
}
export default todos;

