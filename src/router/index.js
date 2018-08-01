import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Main from '../components/Main'
import CurrencyFilter from '../containers/CurrencyFilter'

const Router = () => (
  <BrowserRouter>
    <Main>
      <Route exact path="/" render={() => <div>Nothing here yet :(</div>} />
      <Route exact path="/settings" component={CurrencyFilter} />
    </Main>
  </BrowserRouter>
)

export default Router
