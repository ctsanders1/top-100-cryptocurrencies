import { createSelectorCreator, defaultMemoize } from 'reselect'
import isEqual from 'lodash.isequal'

const stateSelector = state => state
const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual)

export const memoizedStateSelector = createDeepEqualSelector(
  stateSelector,
  state => ({
    data: stateSelector(state.data),
    filter: stateSelector(state.filter),
    hasHttpError: stateSelector(state.hasHttpError),
    selectedCurrency: stateSelector(state.data)[
      Number(stateSelector(state.router.location.pathname).split('/')[1])
    ],
    bitcoinPrice:
      stateSelector(state.data)[1] &&
      stateSelector(state.data)[1]['quotes'][stateSelector(state.filter)].price
  })
)
