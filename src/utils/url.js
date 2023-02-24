const baseURL = 'https://restcountries.com/v2/';

export const allCountries = baseURL + 'all?fields=name,capital,flags,population,region';

export const searchByCountry = (name) => baseURL + 'name/' + name;

export const filterByCode = (codes) => baseURL + 'alpha?codes=' + codes.join(',');