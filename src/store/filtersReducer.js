export const UPDATE_FILTERS = 'UPDATE_FILTERS'

export function filtersReducer(state = null, action) {
  switch (action.type) {
    case UPDATE_FILTERS:
      return action.payload
    default:
      return state
  }
}
