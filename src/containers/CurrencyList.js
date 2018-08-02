import React, { Component } from 'react'
import { connect } from 'react-redux'
import CurrencyListItem from '../components/CurrencyListItem'
import PropTypes from 'prop-types'
import RefreshCurrenciesBtn from './RefreshCurrenciesBtn'

class CurrencyList extends Component {
  shouldComponentUpdate(nextProps) {
    if (
      this.props.data[1] !== undefined &&
      this.props.filter === nextProps.filter &&
      this.props.data[1].last_updated === nextProps.data[1].last_updated
    ) {
      return false
    } else {
      return true
    }
  }

  render() {
    const { data, filter } = this.props
    console.log('CurrencyList')
    return (
      <div>
        <RefreshCurrenciesBtn />
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
  }
}

CurrencyList.propTypes = {
  data: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired
}

export default connect(state => state)(CurrencyList)
