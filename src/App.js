import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import { TodoListStore } from './Components/TodoList'
import { TodoFiltersWithStore } from './Components/TodoFilters'
import { AddTodo } from './Components/AddTodo'

function App() {
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoFiltersWithStore />
      <TodoListStore />
    </Provider>
  )
}

export default App
