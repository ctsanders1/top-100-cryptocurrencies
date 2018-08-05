import React from 'react'
import PropTypes from 'prop-types'
import RefreshCurrenciesBtn from './RefreshCurrenciesBtn'
import { withDataHoc } from './withDataHoc'

// TO DO refactor component, split it into smaller chunks
// make alerts reusable (CurrencyList also have two alerts)
const CurrencyDetail = ({ id, data, filter, hasHttpError: { err } }) => {
  const bitcoinPrice = data[1] ? data[1]['quotes'][filter].price : 0,
    currencyDetailData = data[id] ? data[id] : null

  console.log('CurrencyDetail')
  return (
    <div>
      <RefreshCurrenciesBtn />
      {err ? (
        <div className="alert alert-danger" role="alert">
          We have find some unexpected dificulties while trying to get data.
          Please try again later.
        </div>
      ) : currencyDetailData ? (
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-action active">
              Name: {currencyDetailData.name}
            </li>
            <li className="list-group-item list-group-item-action">
              <small className="font-weight-light">Rank:</small>{' '}
              {currencyDetailData.rank}
            </li>
            <li className="list-group-item list-group-item-action">
              <small className="font-weight-light">Symbol:</small>{' '}
              {currencyDetailData.symbol}
            </li>
            <li className="list-group-item list-group-item-action">
              <small className="font-weight-light">Price:</small>{' '}
              {currencyDetailData.quotes[filter].price} {filter}
            </li>
            <li className="list-group-item list-group-item-action">
              <small className="font-weight-light">24h volume:</small>{' '}
              {currencyDetailData.quotes[filter].volume_24h}
            </li>
            <li className="list-group-item list-group-item-action">
              <small className="font-weight-light">Market cap:</small>{' '}
              {currencyDetailData.quotes[filter].market_cap}
            </li>
            <li className="list-group-item list-group-item-action">
              <small className="font-weight-light">Price in Bitcoin:</small>{' '}
              {bitcoinPrice &&
                currencyDetailData.quotes[filter].price / bitcoinPrice}
            </li>
            <li className="list-group-item list-group-item-action">
              <small className="font-weight-light">1h change:</small>{' '}
              {currencyDetailData.quotes[filter].percent_change_1h}%
            </li>
            <li className="list-group-item list-group-item-action">
              <small className="font-weight-light">24h change:</small>{' '}
              {currencyDetailData.quotes[filter].percent_change_24h}%
            </li>
            <li className="list-group-item list-group-item-action">
              <small className="font-weight-light">7d change:</small>{' '}
              {currencyDetailData.quotes[filter].percent_change_7d}%
            </li>
            <li className="list-group-item list-group-item-action">
              <small className="font-weight-light">Total supply:</small>{' '}
              {currencyDetailData.total_supply}
            </li>
            <li className="list-group-item list-group-item-action">
              <small className="font-weight-light">Available supply:</small>{' '}
              {currencyDetailData.circulating_supply}
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
}

// CurrencyDetail.propTypes = {
//   data: PropTypes.object,
//   filter: PropTypes.string.isRequired,
//   id: PropTypes.string,
//   err: PropTypes.string
// }

export default withDataHoc(CurrencyDetail)
