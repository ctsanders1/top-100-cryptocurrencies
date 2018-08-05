import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'
import { fetchData } from '../actions'

export const history = createBrowserHistory()
const composeEnhancers = composeWithDevTools({})

export const store = createStore(
  connectRouter(history)(reducers),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      ReduxThunk
    )
  )
)

store.dispatch(fetchData())
