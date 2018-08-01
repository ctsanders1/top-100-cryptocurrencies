import { combineReducers } from 'redux'
import { currencyFilterReducer } from './currencyFilterReducer'

export default combineReducers({
  filter: currencyFilterReducer
})
