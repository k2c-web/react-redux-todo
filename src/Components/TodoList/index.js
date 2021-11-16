import { connect } from 'react-redux'
import { todoSelector } from '../../store/todoSelectors'
import { toggleTodoAction } from '../../store/todosActions'

function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
      </label>
      {todo.title}
    </li>
  )
}

export function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} onToggle={onToggle} key={todo.id} />
      ))}
    </ul>
  )
}

// On utilise un composant décoré, qui permet de lier le state du store avec les props du composant
// Ici on passe les liste des todos du state dans les props du composant via la meme clef
const TodoListStore = connect(
  (state) => ({
    todos: todoSelector(state),
  }),
  (dispatch) => ({
    onToggle: (todo) => dispatch(toggleTodoAction(todo)),
  }),
)(TodoList)

export default TodoListStore
