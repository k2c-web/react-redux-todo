import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import { TodoListStore } from './Components/TodoList'
import { TodoFiltersWithStore } from './Components/TodoFilters'

function App() {
  return (
    <Provider store={store}>
      <TodoListStore />
      <TodoFiltersWithStore />
    </Provider>
  )
}

export default App
