import React from 'react'
import Nav from './Nav'

const Main = ({ children }) =>
  console.log('Main') || (
    <div className="container">
      <Nav />
      {children}
    </div>
  )

export default Main
