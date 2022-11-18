import './style.css'

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

export default TodoItem
