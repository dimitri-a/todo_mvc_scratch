const initialStateFilter = {
  filter: 'SHOW_ALL'
}

export const visibilityFilter = (state=initialStateFilter, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return state;

    default:
      return state
  }
}
