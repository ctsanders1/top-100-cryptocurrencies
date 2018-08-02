import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import colors from 'colors'
import ConnectedCurrencyFilter, { CurrencyFilter } from '../CurrencyFilter'
import ConnectedRefreshCurrenciesBtn, {
  RefreshCurrenciesBtn
} from '../RefreshCurrenciesBtn'

configure({ adapter: new Adapter() })

it('CurrencyFilter renders correctly', () => {
  const tree = renderer.create(<CurrencyFilter />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('ConnectedCurrencyFilter renders correctly', () => {
  const initiallState = {
      filter: 'USD',
      data: {},
      hasHttpError: { hasError: false, err: '' }
    },
    mockStore = configureStore(),
    store = mockStore(initiallState),
    wrapper = shallow(<ConnectedCurrencyFilter store={store} />),
    tree = renderer.create(wrapper).toJSON()

  expect(tree).toMatchSnapshot()

  console.log(
    'Test'.yellow,
    ' ConnectedCurrencyFilter renders correctly '.black.bgYellow,
    "is passing but throws warning  although CurrencyFilter component doesn't need key(s) - because it (component) doesn't render array of elements or components."
      .yellow
  )
})

it('RefreshCurrenciesBtn renders correctly', () => {
  const tree = renderer.create(<RefreshCurrenciesBtn />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('ConnectedRefreshCurrenciesBtn renders correctly', () => {
  const initiallState = {
      filter: 'USD',
      data: {},
      hasHttpError: { hasError: false, err: '' }
    },
    mockStore = configureStore(),
    store = mockStore(initiallState),
    wrapper = shallow(<ConnectedRefreshCurrenciesBtn store={store} />),
    tree = renderer.create(wrapper).toJSON()

  expect(tree).toMatchSnapshot()
})
