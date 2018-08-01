import React from 'react'
import { Link } from 'react-router-dom'

const CurrencyListItem = ({ item, filter }) => (
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

export default CurrencyListItem
