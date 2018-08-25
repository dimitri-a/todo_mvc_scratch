

export default (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      debugger
      return { ...state, items: [...state.items, action.param] };

    default:
      return state
  }
}
