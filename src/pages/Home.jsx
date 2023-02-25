import React from 'react';
import CardItem from '../components/CardItem';
import { Controls } from '../components/Controls';
import List from '../components/List';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadCountries } from '../redux/countries/countriesActions.js';
import {
  selectAllCountries,
  selectCountriesInfo,
  selectSearchingCountries,
} from '../redux/countries/countriesSelectors.js';
import {
  selectControls,
  selectSearch,
} from '../redux/controls/controlsSelectors';

const Home = () => {
  const dispatch = useDispatch();
  const { search, region } = useSelector(selectControls);
  const countries = useSelector((state) =>
    selectSearchingCountries(state, { search, region })
  );
  const { status, error, quantity } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!quantity) {
      dispatch(loadCountries());
    }
  }, [quantity, dispatch]);

  const renderCards = () => {
    return countries.map((card) => (
      <CardItem
        img={card.flags.png}
        population={card.population.toLocaleString()}
        name={card.name}
        region={card.region}
        capital={card.capital}
        key={card.name}
      />
    ));
  };

  return (
    <>
      <Controls />
      {error && <h2> Failed to fetch data </h2>}
      {status === 'loading' && <h2> Loading... </h2>}
      {status === 'received' && <List>{renderCards()}</List>}
    </>
  );
};

export default Home;
