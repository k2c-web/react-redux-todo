import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../../store/todosActions'

export function AddTodo() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const inputRef = useRef(null)

  const handlesubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    await dispatch(addTodoAction(inputRef.current.value))
    inputRef.current.value = ''
    inputRef.current.focus()
    setLoading(false)
  }

  return (
    <form className="add-todo" onSubmit={handlesubmit}>
      <input ref={inputRef} type="text" placeholder="Nouvelle tâche..." />
      <button disabled={loading}>
        {loading ? 'Chargement...' : 'Ajouter'}
      </button>
    </form>
  )
}
