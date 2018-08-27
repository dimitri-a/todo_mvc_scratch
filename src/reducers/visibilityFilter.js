const initialStateFilter = ''

export const visibilityFilter = (state = initialStateFilter, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
