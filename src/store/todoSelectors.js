import { createSelector } from 'reselect'
import { filtersSelector } from './filtersSelector'

export const todosSelector = ({ todos }) => {
  return todos
}

// With reselect (create a memoized version of the selector to avoid rerenders)
export const filteredTodosSelector = createSelector(
  todosSelector,
  filtersSelector,
  (todos, filters) => {
    if (filters === null) {
      return todos
    }
    return todos.filter((todo) => todo.completed === filters)
  },
)

// Without reselect
/**
export const filteredTodosSelector = ({ todos, filters }) => {
  if (filters === null) {
    return todos
  }
  return todos.filter((todo) => todo.completed === filters)
}
 **/
