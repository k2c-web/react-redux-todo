export const todoSelector = ({ todos }) => {
  return todos
}

export const filteredTodosSelector = ({ todos, filters }) => {
  if (filters === null) {
    return todos
  }
  return todos.filter((todo) => todo.completed === filters)
}
