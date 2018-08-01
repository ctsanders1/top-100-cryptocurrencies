import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Main from '../components/Main'
import CurrencyList from '../containers/CurrencyList'
import CurrencyFilter from '../containers/CurrencyFilter'

const Router = () => (
  <BrowserRouter>
    <Main>
      <Route exact path="/" component={CurrencyList} />
      <Route exact path="/settings" component={CurrencyFilter} />
    </Main>
  </BrowserRouter>
)

export default Router
