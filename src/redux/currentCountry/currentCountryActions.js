export const SET_COUNTRY = 'SET_COUNTRY';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

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

export const loadCountryByName =
  (name) =>
  (dispatch, _, { client, url }) => {
    dispatch(setLoading());

    client
      .get(url.searchByCountry(name))
      .then(({ data }) => dispatch(setCountry(data[0])))
      .catch((err) => dispatch(setError(err.message)));
  };
