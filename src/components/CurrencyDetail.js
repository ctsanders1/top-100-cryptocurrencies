import React from 'react'
import PropTypes from 'prop-types'
import RefreshCurrenciesBtn from '../containers/RefreshCurrenciesBtn'
import { withDataHoc } from '../containers/withDataHoc'
import Alert from './Alert'

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
      <Alert type="danger">
        We have find some unexpected dificulties while trying to get data.
        Please try again later.
      </Alert>
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
      <Alert type="info">Loading...</Alert>
    )}
  </div>
)

CurrencyDetail.propTypes = {
  selectedCurrency: PropTypes.object,
  filter: PropTypes.string.isRequired,
  bitcoinPrice: PropTypes.number,
  err: PropTypes.string
}

export default withDataHoc(CurrencyDetail)
