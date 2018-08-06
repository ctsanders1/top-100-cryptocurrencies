import { store } from '../'
import { UPDATE_FILTER } from '../../actions'

describe('multiple tests against store', () => {
  it('store.getState() returns initiall state', () => {
    const initiallState = {
      data: {},
      filter: 'USD',
      hasHttpError: { err: '', hasError: false },
      router: {
        action: 'POP',
        location: { hash: '', pathname: '/', search: '', state: undefined }
      }
    }

    expect(store.getState()).toEqual(initiallState)
  })

  it('store.dispatch(action) updates store', () => {
    const action = { type: UPDATE_FILTER, payload: 'EUR' }
    const expected = {
      data: {},
      filter: 'EUR',
      hasHttpError: { err: '', hasError: false },
      router: {
        action: 'POP',
        location: { hash: '', pathname: '/', search: '', state: undefined }
      }
    }

    store.dispatch(action)

    expect(store.getState()).toEqual(expected)
  })
})
