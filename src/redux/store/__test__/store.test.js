import { store } from '../'
import { UPDATE_FILTER } from '../../actions'

describe('multiple tests against store', () => {
  it('store.getState() returns initiall state', () => {
    const initiallState = {
      filter: 'USD',
      data: {},
      hasHttpError: { hasError: false, err: '' }
    }

    expect(store.getState()).toEqual(initiallState)
  })

  it('store.dispatch(action) updates store', () => {
    const action = { type: UPDATE_FILTER, payload: 'EUR' }
    const expected = {
      filter: 'EUR',
      data: {},
      hasHttpError: { hasError: false, err: '' }
    }

    store.dispatch(action)

    expect(store.getState()).toEqual(expected)
  })
})
