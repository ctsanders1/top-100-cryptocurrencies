import React, { Component } from 'react'
import { connect } from 'react-redux'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export const withDataHoc = Comp => {
  /* eslint no-unused-vars: 0 */

  class withDataHocClass extends Component {
    static displayName = `WithData(${getDisplayName(Comp)})`

    render() {
      return <Comp {...this.props} />
    }
  }

  const mapStateToProps = state => state

  return connect(mapStateToProps)(Comp)
}
