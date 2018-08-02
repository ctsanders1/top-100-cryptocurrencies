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
    const {
      data,
      filter,
      hasHttpError: { err }
    } = this.props
    return (
      <div>
        <RefreshCurrenciesBtn />
        <div className="list-group">
          {Object.keys(data).length ? (
            Object.keys(data).map(itemKey => (
              <CurrencyListItem
                key={itemKey}
                item={data[itemKey]}
                filter={filter}
              />
            ))
          ) : !err ? (
            <div className="alert alert-info" role="alert">
              Loading...
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              We have find some unexpected dificulties while trying to get data.
              Please try again later.
            </div>
          )}
        </div>
      </div>
    )
  }
}

CurrencyList.propTypes = {
  data: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  err: PropTypes.string
}

export default connect(state => state)(CurrencyList)
