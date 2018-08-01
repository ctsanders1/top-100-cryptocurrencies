import { fetchDataReducer } from '../fetchDataReducer'
import { currencyFilterReducer } from '../currencyFilterReducer'
import { fetchDataErrorReducer } from '../fetchDataErrorReducer'
import { FETCH_DATA_ERROR, UPDATE_FILTER } from '../../actions/index'

describe('multiple tests against currencyFilterReducer', () => {
  it('currencyFilterReducer should return the initial state', () => {
    expect(currencyFilterReducer(undefined, {})).toEqual('USD')
  })

  it('currencyFilterReducer should return the EUR', () => {
    expect(
      currencyFilterReducer('USD', {
        type: UPDATE_FILTER,
        payload: 'EUR'
      })
    ).toEqual('EUR')
  })
})

describe('tests against fetchDataReducer', () => {
  it('fetchDataReducer should return the initial state', () => {
    expect(fetchDataReducer(undefined, {})).toEqual({})
  })
})

describe('multiple tests against fetchDataErrorReducer', () => {
  const initiallState = { hasError: false, err: '' }

  it('fetchDataErrorReducer should return the initial state', () => {
    expect(fetchDataErrorReducer(undefined, {})).toEqual(initiallState)
  })

  it('fetchDataErrorReducer should return the new state', () => {
    const action = { type: FETCH_DATA_ERROR, payload: true, err: 'message' }
    const newState = { hasError: true, err: 'message' }

    expect(fetchDataErrorReducer(initiallState, action)).toEqual(newState)
  })
})
