import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <ul className="nav justify-content-center my-5">
    <li className="nav-item mr-1">
      <NavLink
        exact
        to="/"
        className="btn btn-outline-primary"
        activeClassName="disabled"
      >
        Home
      </NavLink>
    </li>{' '}
    <li className="nav-item ml-1">
      <NavLink
        exact
        to="/settings"
        className="btn btn-outline-primary"
        activeClassName="disabled"
      >
        Settings
      </NavLink>
    </li>
  </ul>
)

export default Nav
