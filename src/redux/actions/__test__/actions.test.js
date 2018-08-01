import {
  updateFilter,
  fetchDataError,
  UPDATE_FILTER,
  FETCH_DATA_ERROR
} from '../'

test('updateFilter action creator genetates correct object', () => {
  const actual = updateFilter('EUR'),
    expected = { type: UPDATE_FILTER, payload: 'EUR' }

  expect(actual).toEqual(expected)
})

describe('multiple tests against fetchDataError action creator', () => {
  it('fetchDataError action creator genetates correct object on http success', () => {
    const actual = fetchDataError(false, ''),
      expected = { type: FETCH_DATA_ERROR, payload: false, err: '' }

    expect(actual).toEqual(expected)
  })

  it(' action creator genetates correct object on http error', () => {
    const actual = fetchDataError(true, 'something went wrong'),
      expected = {
        type: FETCH_DATA_ERROR,
        payload: true,
        err: 'something went wrong'
      }

    expect(actual).toEqual(expected)
  })
})
