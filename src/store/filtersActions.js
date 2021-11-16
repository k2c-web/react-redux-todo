import { UPDATE_FILTERS } from './filtersReducer'

export const setFiltersAction = (value) => ({
  type: UPDATE_FILTERS,
  payload: value,
})
