import React from 'react'
import Nav from './Nav'

const Main = ({ children }) => (
  <div className="container">
    <Nav />
    {children}
  </div>
)

export default Main
