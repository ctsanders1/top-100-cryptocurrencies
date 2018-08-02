import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const CurrencyListItem = ({ item, filter }) => (
  <Link
    to={'/' + item.id}
    key={item.id}
    className="list-group-item list-group-item-action"
  >
    <div>
      <small className="font-weight-light">Rank:</small> {item.rank}
    </div>
    <div>
      <small className="font-weight-light">Symbol:</small> {item.symbol}
    </div>
    <div>
      <small className="font-weight-light">Price:</small>{' '}
      {item['quotes'][filter].price} {filter}
    </div>
    <div>
      <small className="font-weight-light">24h percent change:</small>{' '}
      {item['quotes'][filter].percent_change_24h}%
    </div>
  </Link>
)

CurrencyListItem.propTypes = {
  item: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired
}

export default CurrencyListItem
