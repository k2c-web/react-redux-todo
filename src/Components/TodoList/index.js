import { useSelector, useDispatch } from 'react-redux'
import { filteredTodosSelector } from '../../store/todoSelectors'
import { toggleTodoAction, deleteTodoAction } from '../../store/todosActions'
import TodoItem from '../TodoItem'
import { useCallback } from 'react'
import './style.css'

export function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todos-list">
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
