import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'
import { fetchData } from '../actions'

const composeEnhancers = composeWithDevTools({})

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxThunk))
)

store.dispatch(fetchData())
