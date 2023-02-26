export const SET_COUNTRY = 'SET_COUNTRY';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_COUNTRY = 'CLEAR_COUNTRY';
export const SET_NEIGHBORS = 'SET_NEIGHBORS';

export const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const clearCountry = () => ({
  type: CLEAR_COUNTRY,
});

export const setNeighbors = (countries) => ({
  type: SET_NEIGHBORS,
  payload: countries,
})

export const loadCountryByName =
  (name) =>
  (dispatch, _, { client, url }) => {
    dispatch(setLoading());

    client
      .get(url.searchByCountry(name))
      .then(({ data }) => dispatch(setCountry(data[0])))
      .catch((err) => dispatch(setError(err.message)));
  };

  export const loadNeighbors =
  (borderCodes) =>
  (dispatch, _, { client, url }) => {
    dispatch(setLoading());

    client
      .get(url.filterByCode(borderCodes))
      .then(({ data }) => dispatch(setNeighbors(data.map(country => country.name))))
      .catch((err) => dispatch(setError(err.message)));
  };
