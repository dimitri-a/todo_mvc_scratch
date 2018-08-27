const initialStateFilter = {
  filter: 'SHOW_ALL'
}

export const visibilityFilter = (state = initialStateFilter, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return state;

    case "SHOW_COMPLETED":
      return state.map(t =>{
        if (t.completed)
        {
          return t;
        }
      });

    case "SHOW_UNCOMPLETED":
    return state.map(t =>{
      if (!t.completed)
      {
        return t;
      }
    });

    default:
      return state
  }
}
