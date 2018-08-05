import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../redux/store'
import Main from '../components/Main'
import CurrencyList from '../components/CurrencyList'
import CurrencyFilter from '../containers/CurrencyFilter'
import CurrencyDetail from '../components/CurrencyDetail'

const Router = () => (
  <ConnectedRouter history={history}>
    <Main>
      <Switch>
        <Route exact path="/" component={CurrencyList} />
        <Route exact path="/settings" component={CurrencyFilter} />
        <Route
          path="/:id"
          render={({ match }) => <CurrencyDetail id={match.params.id} />}
        />
      </Switch>
    </Main>
  </ConnectedRouter>
)

export default Router
