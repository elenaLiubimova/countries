export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  quantity: state.countries.list.length,
  list: state.countries.list,
});

export const selectAllCountries = (state) => state.countries.list;
