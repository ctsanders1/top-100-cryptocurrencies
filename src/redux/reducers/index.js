import { combineReducers } from 'redux'
import { currencyFilterReducer } from './currencyFilterReducer'
import { fetchDataReducer } from './fetchDataReducer'
import { fetchDataErrorReducer } from './fetchDataErrorReducer'

export default combineReducers({
  filter: currencyFilterReducer,
  data: fetchDataReducer,
  hasHttpError: fetchDataErrorReducer
})
