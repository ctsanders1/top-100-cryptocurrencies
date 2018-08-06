import React, { Component } from 'react'
import { connect } from 'react-redux'
import { memoizedStateSelector } from '../redux/selectors'
import { getDisplayName } from '../utils'

export const withDataHoc = Comp => {
  /* eslint no-unused-vars: 0 */

  class withDataHocClass extends Component {
    static displayName = `WithData(${getDisplayName(Comp)})`

    render() {
      return <Comp {...this.props} />
    }
  }
  const mapStateToProps = state => {
    return memoizedStateSelector(state)
  }

  return connect(mapStateToProps)(Comp)
}
