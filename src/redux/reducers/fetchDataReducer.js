import { FETCH_DATA_SUCCESS } from '../actions'

export const fetchDataReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return action.payload
    default:
      return state
  }
}
