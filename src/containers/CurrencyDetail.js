import React from 'react'
import { connect } from 'react-redux'

const CurrencyDetail = ({ data, filter, bitcoinPrice }) => (
  <div>
    {data ? (
      <div className="card mt-5">
        <ul className="list-group list-group-flush">
          <li className="list-group-item list-group-item-action active">
            Name: {data.name}
          </li>
          <li className="list-group-item list-group-item-action">
            Rank: {data.rank}
          </li>
          <li className="list-group-item list-group-item-action">
            Symbol: {data.symbol}
          </li>
          <li className="list-group-item list-group-item-action">
            Price: {data.quotes[filter].price} {filter}
          </li>
          <li className="list-group-item list-group-item-action">
            24h volume: {data.quotes[filter].volume_24h}
          </li>
          <li className="list-group-item list-group-item-action">
            Market cap: {data.quotes[filter].market_cap}
          </li>
          <li className="list-group-item list-group-item-action">
            Price in Bitcoin:{' '}
            {bitcoinPrice && data.quotes[filter].price / bitcoinPrice}
          </li>
          <li className="list-group-item list-group-item-action">
            1h change: {data.quotes[filter].percent_change_1h}%
          </li>
          <li className="list-group-item list-group-item-action">
            24h change: {data.quotes[filter].percent_change_24h}%
          </li>
          <li className="list-group-item list-group-item-action">
            7d change: {data.quotes[filter].percent_change_7d}%
          </li>
          <li className="list-group-item list-group-item-action">
            Total supply: {data.total_supply}
          </li>
          <li className="list-group-item list-group-item-action">
            Available supply: {data.circulating_supply}
          </li>
        </ul>
      </div>
    ) : (
      <div className="mt-5">Loading...</div>
    )}
  </div>
)

export default connect((state, ownProps) => ({
  data: state.data[ownProps.id],
  bitcoinPrice: state.data['1']
    ? state.data['1'].quotes[state.filter].price
    : null,
  filter: state.filter
}))(CurrencyDetail)
