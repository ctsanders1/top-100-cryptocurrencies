import React from 'react'
import Nav from './Nav'

const Main = ({ children }) => (
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col col-lg-6">
        <Nav />
        {children}
      </div>
    </div>
  </div>
)

export default Main
