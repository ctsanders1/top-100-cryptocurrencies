import React from 'react'
import { connect } from 'react-redux'
import CurrencyListItem from '../components/CurrencyListItem'
import PropTypes from 'prop-types'

const CurrencyList = ({ filter, data }) => (
  <div>
    <ul className="list-group my-5">
      {Object.keys(data).length ? (
        Object.keys(data).map(itemKey => (
          <CurrencyListItem
            key={itemKey}
            item={data[itemKey]}
            filter={filter}
          />
        ))
      ) : (
        <li>Loading...</li>
      )}
    </ul>
  </div>
)

CurrencyList.propTypes = {
  data: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired
}

export default connect(state => state)(CurrencyList)
