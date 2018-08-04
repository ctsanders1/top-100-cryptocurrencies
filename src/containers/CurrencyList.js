import React from 'react'
import CurrencyListItem from '../components/CurrencyListItem'
import PropTypes from 'prop-types'
import RefreshCurrenciesBtn from './RefreshCurrenciesBtn'
import { withDataHoc } from './withDataHoc'

const CurrencyList = ({ data, filter, hasHttpError: { err } }) => (
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

CurrencyList.propTypes = {
  data: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  err: PropTypes.string
}

export default withDataHoc(CurrencyList)
