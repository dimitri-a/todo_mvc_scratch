const initialState = { items: ['the first item'], products: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    // case 'INCREMENT':
    //   //debugger;
    //   return state + 1;

    // case 'ADD_ITEM':
    //   //debugger;
    //   return [...state, action.payload]

    // case 'ADD_PRODUCT':
    //   debugger;
    //   return { ...state, products: [...state.products, action.payload] }

    default:
      debugger
      return state
  }
}


// const initialState = { todos: [] }

// export default (state = {todos:['first todo']}, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       debugger
//       return { ...state, todos: [...state.items, action.param] };

//     default:
//       debugger
//       return state
//   }
// }
