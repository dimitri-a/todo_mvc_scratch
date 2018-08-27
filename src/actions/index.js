export const addTodo = (param) => ({
  type: 'ADD_TODO',
  param
})

export const completeTodo = (param) => ({
  type: 'COMPLETE_TODO',
  param
})


export const filterShowAll = () => ({
  type: 'SHOW_ALL'}
)

export const filterCompleted = () => ({
  type: 'SHOW_COMPLETED'}
)

export const filterUnCompleted = () => ({
  type: 'SHOW_UNCOMPLETED'}
)






