import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const CurrencyList = ({ filter, data }) => (
  <div>
    <ul className="list-group my-5">
      {Object.keys(data).length ? (
        Object.keys(data).map(
          item =>
            console.log(data[item]) || (
              <Link
                to={'/' + data[item].id}
                key={data[item].id}
                className="list-group-item list-group-item-action"
              >
                <div>
                  <div>Rank: {data[item].rank}</div>
                  <div>Symbol: {data[item].symbol}</div>
                  <div>
                    Price: {data[item]['quotes'][filter].price} {filter}
                  </div>
                  <div>
                    24h percent change:{' '}
                    {data[item]['quotes'][filter].percent_change_24h}%
                  </div>
                </div>
              </Link>
            )
        )
      ) : (
        <li>Loading...</li>
      )}
    </ul>
  </div>
)

export default connect(state => state)(CurrencyList)
