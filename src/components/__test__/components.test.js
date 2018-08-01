import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Main from '../Main'
import Nav from '../Nav'
import CurrencyListItem from '../CurrencyListItem'

it('Main renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Main />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Nav renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Nav />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('CurrencyListItem renders correctly', () => {
  const item = {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    website_slug: 'bitcoin',
    rank: 1,
    circulating_supply: 17184162,
    total_supply: 17184162,
    max_supply: 21000000,
    quotes: {
      USD: {
        price: 7561.03107328,
        volume_24h: 4710164004.26083,
        market_cap: 129929982850,
        percent_change_1h: -0.37,
        percent_change_24h: -2.53,
        percent_change_7d: -7.52
      },
      EUR: {
        price: 6484.7485441229,
        volume_24h: 4039690998.9103026,
        market_cap: 111434969511,
        percent_change_1h: -0.37,
        percent_change_24h: -2.53,
        percent_change_7d: -7.52
      },
      CNY: {
        price: 51584.3783943455,
        volume_24h: 32134622902.669117,
        market_cap: 886434314998,
        percent_change_1h: -0.37,
        percent_change_24h: -2.53,
        percent_change_7d: -7.52
      }
    },
    last_updated: 1533155746
  }
  const filter = 'USD'
  const tree = renderer
    .create(
      <Router>
        <CurrencyListItem item={item} filter={filter} />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
