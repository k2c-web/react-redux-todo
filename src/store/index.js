import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { todosReducer } from './todosReducer'
import { filtersReducer } from './filtersReducer'

const store = createStore(
  combineReducers({
    todos: todosReducer,
    filters: filtersReducer,
  }),
  composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ),
)

export default store
