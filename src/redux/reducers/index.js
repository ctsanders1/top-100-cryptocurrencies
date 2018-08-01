import { combineReducers } from 'redux'
import { currencyFilterReducer } from './currencyFilterReducer'
import { fetchDataReducer } from './fetchDataReducer'

export default combineReducers({
  filter: currencyFilterReducer,
  data: fetchDataReducer
})
