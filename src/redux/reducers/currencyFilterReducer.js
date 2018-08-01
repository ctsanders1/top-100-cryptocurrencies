import { UPDATE_FILTER } from '../actions'

export const currencyFilterReducer = (state = 'USD', action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.payload
    default:
      return state
  }
}
