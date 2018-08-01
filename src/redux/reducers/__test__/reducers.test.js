import { currencyFilterReducer } from '../currencyFilterReducer'
import { UPDATE_FILTER } from '../../actions/index'

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
