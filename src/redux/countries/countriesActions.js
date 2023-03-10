export const SET_COUNTRIES = 'SET_COUNTRIES';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const loadCountries = () => (dispatch, _, {client, url}) => {
  dispatch(setLoading());
  
  client.get(url.allCountries)
    .then(({data}) => dispatch(setCountries(data)))
    .catch((err) => dispatch(setError(err.message)));
}