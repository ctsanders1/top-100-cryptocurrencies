import React from 'react'
import PropTypes from 'prop-types'
import RefreshCurrenciesBtn from '../containers/RefreshCurrenciesBtn'
import { withDataHoc } from '../containers/withDataHoc'

// TO DO refactor component, split it into smaller chunks
// make alerts reusable (CurrencyList also have two alerts)
const CurrencyDetail = ({
  selectedCurrency,
  filter,
  hasHttpError: { err },
  bitcoinPrice
}) => (
  <div>
    <RefreshCurrenciesBtn />
    {err ? (
      <div className="alert alert-danger" role="alert">
        We have find some unexpected dificulties while trying to get data.
        Please try again later.
      </div>
    ) : selectedCurrency ? (
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item list-group-item-action active">
            Name: {selectedCurrency.name}
          </li>
          <li className="list-group-item list-group-item-action">
            <small className="font-weight-light">Rank:</small>{' '}
            {selectedCurrency.rank}
          </li>
          <li className="list-group-item list-group-item-action">
            <small className="font-weight-light">Symbol:</small>{' '}
            {selectedCurrency.symbol}
          </li>
          <li className="list-group-item list-group-item-action">
            <small className="font-weight-light">Price:</small>{' '}
            {selectedCurrency.quotes[filter].price} {filter}
          </li>
          <li className="list-group-item list-group-item-action">
            <small className="font-weight-light">24h volume:</small>{' '}
            {selectedCurrency.quotes[filter].volume_24h}
          </li>
          <li className="list-group-item list-group-item-action">
            <small className="font-weight-light">Market cap:</small>{' '}
            {selectedCurrency.quotes[filter].market_cap}
          </li>
          <li className="list-group-item list-group-item-action">
            <small className="font-weight-light">Price in Bitcoin:</small>{' '}
            {bitcoinPrice &&
              selectedCurrency.quotes[filter].price / bitcoinPrice}
          </li>
          <li className="list-group-item list-group-item-action">
            <small className="font-weight-light">1h change:</small>{' '}
            {selectedCurrency.quotes[filter].percent_change_1h}%
          </li>
          <li className="list-group-item list-group-item-action">
            <small className="font-weight-light">24h change:</small>{' '}
            {selectedCurrency.quotes[filter].percent_change_24h}%
          </li>
          <li className="list-group-item list-group-item-action">
            <small className="font-weight-light">7d change:</small>{' '}
            {selectedCurrency.quotes[filter].percent_change_7d}%
          </li>
          <li className="list-group-item list-group-item-action">
            <small className="font-weight-light">Total supply:</small>{' '}
            {selectedCurrency.total_supply}
          </li>
          <li className="list-group-item list-group-item-action">
            <small className="font-weight-light">Available supply:</small>{' '}
            {selectedCurrency.circulating_supply}
          </li>
        </ul>
      </div>
    ) : (
      <div className="alert alert-info" role="alert">
        Loading...
      </div>
    )}
  </div>
)

CurrencyDetail.propTypes = {
  data: PropTypes.object,
  filter: PropTypes.string.isRequired,
  id: PropTypes.string,
  err: PropTypes.string
}

export default withDataHoc(CurrencyDetail)
