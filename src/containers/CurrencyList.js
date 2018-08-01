import React from 'react'
import { connect } from 'react-redux'
import CurrencyListItem from '../components/CurrencyListItem'

const CurrencyList = ({ filter, data }) => (
  <div>
    <ul className="list-group my-5">
      {Object.keys(data).length ? (
        Object.keys(data).map(
          itemKey =>
            console.log(itemKey) || (
              <CurrencyListItem
                key={itemKey}
                item={data[itemKey]}
                filter={filter}
              />
            )
        )
      ) : (
        <li>Loading...</li>
      )}
    </ul>
  </div>
)

export default connect(state => state)(CurrencyList)
