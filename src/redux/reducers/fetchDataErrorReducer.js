import { FETCH_DATA_ERROR } from '../actions'

export const fetchDataErrorReducer = (
  state = { hasError: false, err: '' },
  action
) => {
  switch (action.type) {
    case FETCH_DATA_ERROR:
      return { ...state, hasError: action.payload, err: action.err }
    default:
      return state
  }
}
