const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {

  case 'INCREMENT':
  debugger;
    return state+1;

  default:
    return state
  }
}
