const initialState = ['first']

const todos= (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
     // debugger
      return action.param

    default:
      return state
  }
}

export default todos