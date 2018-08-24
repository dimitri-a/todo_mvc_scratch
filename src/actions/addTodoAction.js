const addTodo = (param) => ({
  type: 'ADD_TODO',
  payload: param.text
})

export default addTodo;
