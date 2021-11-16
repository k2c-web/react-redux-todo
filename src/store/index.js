import { createStore, combineReducers } from 'redux'
import { todosReducer } from './todosReducer'
import { filtersReducer } from './filtersReducer'
const store = createStore(
  combineReducers({
    todos: todosReducer,
    filters: filtersReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
