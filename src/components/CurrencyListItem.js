import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const CurrencyListItem = ({ item, filter }) =>
  console.log('CurrencyListItem') || (
    <Link
      to={'/' + item.id}
      key={item.id}
      className="list-group-item list-group-item-action"
    >
      <div>
        <div>Rank: {item.rank}</div>
        <div>Symbol: {item.symbol}</div>
        <div>
          Price: {item['quotes'][filter].price} {filter}
        </div>
        <div>
          24h percent change: {item['quotes'][filter].percent_change_24h}%
        </div>
      </div>
    </Link>
  )

CurrencyListItem.propTypes = {
  item: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired
}

export default CurrencyListItem
