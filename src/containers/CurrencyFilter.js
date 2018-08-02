import React from 'react'
import { connect } from 'react-redux'
import { updateFilter } from '../redux/actions'

export const CurrencyFilter = ({ updateFilter, currency }) => (
  <div className="card">
    <div className="card-header">Change currency</div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <input
          className="align-middle"
          type="radio"
          id="currencyUSD"
          name="currency"
          value="USD"
          onClick={() => updateFilter('USD')}
          defaultChecked={currency === 'USD'}
        />
        <label htmlFor="currencyUSD" className="align-text-top ml-2">
          {' '}
          USD
        </label>
      </li>
      <li className="list-group-item">
        <input
          type="radio"
          id="currencyEUR"
          name="currency"
          value="EUR"
          onClick={() => updateFilter('EUR')}
          defaultChecked={currency === 'EUR'}
        />
        <label htmlFor="currencyEUR" className="align-text-top ml-2">
          {' '}
          EUR
        </label>
      </li>
      <li className="list-group-item">
        <input
          type="radio"
          id="currencyCNY"
          name="currency"
          value="CNY"
          onClick={() => updateFilter('CNY')}
          defaultChecked={currency === 'CNY'}
        />
        <label htmlFor="currencyCNY" className="align-text-top ml-2">
          {' '}
          CNY
        </label>
      </li>
    </ul>
  </div>
)

export default connect(
  state => ({ currency: state.filter }),
  { updateFilter }
)(CurrencyFilter)
