const initialState = [{id:0,text:"first todoitem",completed:false}]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      //debugger
      return [...state, {
        id:state.reduce((maxId,todo)=>Math.max(todo.id,maxId),-1)+1,
        text:action.param,
        completed:false
      }]

    case 'COMPLETE_TODO':
     debugger
     console.log('reducer',state);
      return state.map(todo => 
        todo.id === action.param ?
        {...todo,completed:!todo.completed}
        :
        todo
      );

    default:
      return state
  }
}