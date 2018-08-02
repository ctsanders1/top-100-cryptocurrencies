import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import RefreshCurrenciesBtn from './RefreshCurrenciesBtn'

class CurrencyDetail extends Component {
  shouldComponentUpdate(nextProps) {
    if (
      this.props.data !== undefined &&
      this.props.filter === nextProps.filter &&
      this.props.data.last_updated === nextProps.data.last_updated
    ) {
      return false
    } else {
      return true
    }
  }

  render() {
    const { data, filter, bitcoinPrice } = this.props
    return (
      <div>
        <RefreshCurrenciesBtn />
        {data ? (
          <div className="card mt-5">
            <ul className="list-group list-group-flush">
              <li className="list-group-item list-group-item-action active">
                Name: {data.name}
              </li>
              <li className="list-group-item list-group-item-action">
                <small className="font-weight-light">Rank:</small> {data.rank}
              </li>
              <li className="list-group-item list-group-item-action">
                <small className="font-weight-light">Symbol:</small>{' '}
                {data.symbol}
              </li>
              <li className="list-group-item list-group-item-action">
                <small className="font-weight-light">Price:</small>{' '}
                {data.quotes[filter].price} {filter}
              </li>
              <li className="list-group-item list-group-item-action">
                <small className="font-weight-light">24h volume:</small>{' '}
                {data.quotes[filter].volume_24h}
              </li>
              <li className="list-group-item list-group-item-action">
                <small className="font-weight-light">Market cap:</small>{' '}
                {data.quotes[filter].market_cap}
              </li>
              <li className="list-group-item list-group-item-action">
                <small className="font-weight-light">Price in Bitcoin:</small>{' '}
                {bitcoinPrice && data.quotes[filter].price / bitcoinPrice}
              </li>
              <li className="list-group-item list-group-item-action">
                <small className="font-weight-light">1h change:</small>{' '}
                {data.quotes[filter].percent_change_1h}%
              </li>
              <li className="list-group-item list-group-item-action">
                <small className="font-weight-light">24h change:</small>{' '}
                {data.quotes[filter].percent_change_24h}%
              </li>
              <li className="list-group-item list-group-item-action">
                <small className="font-weight-light">7d change:</small>{' '}
                {data.quotes[filter].percent_change_7d}%
              </li>
              <li className="list-group-item list-group-item-action">
                <small className="font-weight-light">Total supply:</small>{' '}
                {data.total_supply}
              </li>
              <li className="list-group-item list-group-item-action">
                <small className="font-weight-light">Available supply:</small>{' '}
                {data.circulating_supply}
              </li>
            </ul>
          </div>
        ) : (
          <div className="mt-5">Loading...</div>
        )}
      </div>
    )
  }
}

CurrencyDetail.propTypes = {
  data: PropTypes.object,
  bitcoinPrice: PropTypes.number,
  filter: PropTypes.string.isRequired
}

export default connect((state, ownProps) => ({
  data: state.data[ownProps.id],
  bitcoinPrice: state.data['1']
    ? state.data['1'].quotes[state.filter].price
    : null,
  filter: state.filter
}))(CurrencyDetail)
