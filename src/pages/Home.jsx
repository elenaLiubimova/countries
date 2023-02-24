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
} from '../redux/countries/countriesSelectors.js';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectAllCountries);
  const { status, error, quantity } = useSelector(selectCountriesInfo);

  useEffect(() => {
    dispatch(loadCountries());
  }, [quantity, dispatch]);

  const renderCards = () => {
    return countries.map((card, i) => (
      <CardItem img={card.flags.png} name={card.name} key={card.name} />
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
