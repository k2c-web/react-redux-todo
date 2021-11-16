const initialState = [
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

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [
        ...state,
        {
          id: state.length + 1,
          ...action.payload,
          completed: false,
        },
      ]
    case UPDATE_TODO_ACTION:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload }
        } else {
          return todo
        }
      })
    default:
      return state
  }
}
