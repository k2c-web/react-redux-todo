import {
  ADD_TODO_ACTION,
  UPDATE_TODO_ACTION,
  DELETE_TODO_ACTION,
} from './todosReducer'

export const toggleTodoAction = (todo) => ({
  type: UPDATE_TODO_ACTION,
  payload: { ...todo, completed: !todo.completed },
})

export const deleteTodoAction = (todo) => ({
  type: DELETE_TODO_ACTION,
  payload: todo.id,
})

export const addTodoAction = (title) => async (dispatch) => {
  dispatch({
    type: ADD_TODO_ACTION,
    payload: { title: title },
  })
}
