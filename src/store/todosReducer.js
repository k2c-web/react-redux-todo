const initialState = JSON.parse(localStorage.getItem('todos')) || [
  {
    id: 1,
    title: 'Enregistrer le tutoriel',
    completed: false,
  },
  {
    id: 2,
    title: 'Faire la lessive',
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
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload }
        } else {
          return todo
        }
      })
    case DELETE_TODO_ACTION:
      return state.filter((todo) => todo.id !== action.payload)
    default:
      return state
  }
}
