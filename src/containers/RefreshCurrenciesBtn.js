import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { fetchData } from '../redux/actions'

const RefreshCurrenciesBtn = ({ fetchData }) => (
  <button className="btn btn-outline-primary" onClick={fetchData}>
    Get a fresh data
  </button>
)

RefreshCurrenciesBtn.propTypes = {
  fetchData: PropTypes.func.isRequired
}

export default connect(
  null,
  dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch)
  })
)(RefreshCurrenciesBtn)
