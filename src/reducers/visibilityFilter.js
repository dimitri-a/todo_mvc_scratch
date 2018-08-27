const initialStateFilter = {

}

export const visibilityFilter = (state =[], action) => {
  switch (action.type) {

    case "SHOW_ALL":
      return { ...state }

    case "SHOW_COMPLETED":
      return state.map(t =>{
        if (t.completed)
        {
          return t;
        }
      })

    case "SHOW_INCOMPLETE":
    return state.map(t =>{
      if (!t.completed)
      {
        return t;
      }
    })

    default:
      return state
  }
}
