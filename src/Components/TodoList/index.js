import { useSelector, useDispatch } from 'react-redux'
import { filteredTodosSelector } from '../../store/todoSelectors'
import { toggleTodoAction, deleteTodoAction } from '../../store/todosActions'
import { useCallback } from 'react'

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <label htmlFor="">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
      </label>
      {todo.title}
      <span onClick={() => onDelete(todo)} style={{ color: 'red' }}>
        x
      </span>
    </li>
  )
}

export function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          key={todo.id}
        />
      ))}
    </ul>
  )
}

// Interface between the componentto easily change the state manager technology
export function TodoListStore() {
  const todos = useSelector(filteredTodosSelector)
  const dispatch = useDispatch()

  const onToggle = useCallback(
    (todo) => {
      dispatch(toggleTodoAction(todo))
    },
    [dispatch],
  )

  const onDelete = useCallback(
    (todo) => {
      dispatch(deleteTodoAction(todo))
    },
    [dispatch],
  )

  return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
}
