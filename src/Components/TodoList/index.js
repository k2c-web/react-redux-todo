import { useSelector, useDispatch } from 'react-redux'
import { todoSelector } from '../../store/todoSelectors'
import { toggleTodoAction } from '../../store/todosActions'
import { useCallback } from 'react'

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

export function TodoListStore() {
  const todos = useSelector(todoSelector)
  const dispatch = useDispatch()

  const onToggle = useCallback((todo) => {
    dispatch(toggleTodoAction(todo))
  }, [])

  return <TodoList todos={todos} onToggle={onToggle} />
}
