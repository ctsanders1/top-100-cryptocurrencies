import { updateFilter, UPDATE_FILTER } from '../'

test('updateFilter action creator genetates correct object', () => {
  const actual = updateFilter('EUR'),
    expected = { type: UPDATE_FILTER, payload: 'EUR' }

  expect(actual).toEqual(expected)
})
