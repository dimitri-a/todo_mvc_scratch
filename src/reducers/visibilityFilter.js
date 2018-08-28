export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return action.type
      break;
    case 'SHOW_UNCOMPLETED':
      return action.type
      break;

    case 'SHOW_COMPLETED':
      return action.type
      break;


    default:
      return state;
      break;
  }
}
