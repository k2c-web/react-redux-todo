const initialState = JSON.parse(localStorage.getItem('todos')) || [
  {
    id: 1,
    title: 'Tâche 1',
    completed: false,
  },
  {
    id: 2,
    title: 'Tâche 2',
    completed: true,
  },
]

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION'
export const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION'
export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION'

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      const newArray = [
        ...state,
        {
          id: state.length + 1,
          ...action.payload,
          completed: false,
        },
      ]
      localStorage.setItem('todos', JSON.stringify(newArray))
      return newArray
    case UPDATE_TODO_ACTION:
      const newState = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload }
        } else {
          return todo
        }
      })
      localStorage.setItem('todos', JSON.stringify(newState))
      return newState
    case DELETE_TODO_ACTION:
      const newArr = state.filter((todo) => todo.id !== action.payload)
      localStorage.setItem('todos', JSON.stringify(newArr))
      return newArr
    default:
      return state
  }
}
