export const UPDATE_FILTER = 'UPDATE_FILTER'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'

export const updateFilter = currency => ({
  type: UPDATE_FILTER,
  payload: currency
})

export const fetchData = () => {
  return (dispatch, getState) => {
    Promise.all([
      fetch(
        'https://api.coinmarketcap.com/v2/0ticker/?limit=100&sort=rank&convert=EUR'
      )
        .then(res => res.json())
        .then(d => d.data),
      fetch(
        'https://api.coinmarketcap.com/v2/ticker/?limit=100&sort=rank&convert=CNY'
      )
        .then(res => res.json())
        .then(d => d.data)
    ])
      .then(([withEUR, withCNY]) => {
        const data = withEUR

        // merge CNY prop into data
        for (let key in withCNY) {
          data[key]['quotes']['CNY'] = withCNY[key]['quotes']['CNY']
        }

        dispatch({ type: FETCH_DATA_SUCCESS, payload: data })

        getState().hasHttpError.hasError && dispatch(fetchDataError(false, ''))
      })
      .catch(err => {
        dispatch(fetchDataError(true, err.toString()))
      })
  }
}

// currently redundant
export const fetchDataError = (bool, err) => ({
  type: FETCH_DATA_ERROR,
  payload: bool,
  err: err
})
