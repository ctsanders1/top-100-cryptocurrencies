import React from 'react'
import CurrencyListItem from './CurrencyListItem'
import PropTypes from 'prop-types'
import RefreshCurrenciesBtn from '../containers/RefreshCurrenciesBtn'
import { withDataHoc } from '../containers/withDataHoc'
import Alert from './Alert'

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
        <Alert type="info">Loading...</Alert>
      ) : (
        <Alert type="danger">
          We have find some unexpected dificulties while trying to get data.
          Please try again later.
        </Alert>
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
