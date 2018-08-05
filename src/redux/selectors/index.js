import { createSelectorCreator, defaultMemoize } from 'reselect'
import isEqual from 'lodash.isequal'

const stateSelector = state => state
const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual)

export const memoizedStateSelector = createDeepEqualSelector(
  stateSelector,
  state => ({
    data: stateSelector(state.data),
    filter: stateSelector(state.filter),
    hasHttpError: stateSelector(state.hasHttpError)
  })
)
