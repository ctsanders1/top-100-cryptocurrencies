import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Main from '../Main'
import Nav from '../Nav'

it('Main renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Main />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Nav renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Nav />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
