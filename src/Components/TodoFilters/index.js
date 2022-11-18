import { connect } from 'react-redux'
import { setFiltersAction } from '../../store/filtersActions'
import { filtersSelector } from '../../store/filtersSelector'

export function TodoFilters({ value, onChange }) {
  return (
    <div className="todo-filters">
      <button disabled={value === null} onClick={() => onChange(null)}>
        Tous
      </button>
      <button disabled={value === true} onClick={() => onChange(true)}>
        Completés
      </button>
      <button disabled={value === false} onClick={() => onChange(false)}>
        A faire
      </button>
    </div>
  )
}

//CONNECT EXEMPLE
export const TodoFiltersWithStore = connect(
  (state) => ({
    value: filtersSelector(state),
  }),
  (dispatch) => ({
    onChange: (value) => dispatch(setFiltersAction(value)),
  }),
)(TodoFilters)
