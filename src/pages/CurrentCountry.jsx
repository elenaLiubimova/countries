import { KeyboardBackspace } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectCurrentCountry } from '../redux/currentCountry/currentCountrySelector';
import { loadCountryByName } from '../redux/currentCountry/currentCountryActions';
import styled from 'styled-components';
import finland from '../img/finland.svg';
import { useEffect } from 'react';

const Wrapper = styled.div`
  padding: 20px 0;
`;

const CountryInfo = styled.div`
  display: flex;
  padding-top: 40px;
  gap: 40px;
`;

const Flag = styled.img`
  width: 50%;
`;

const Info = styled.div``;

const CurrentCountry = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error, country } = useSelector(selectCurrentCountry);

  useEffect(() => {
    dispatch(loadCountryByName(name));
  }, [name, dispatch]);

  return (
    <Wrapper>
      <Button
        onClick={() => navigate(-1)}
        variant="outlined"
        startIcon={<KeyboardBackspace />}
        size="small"
      >
        Back
      </Button>
      {error && <h2> Failed to fetch data </h2>}
      {status === 'loading' && <h2> Loading... </h2>}
      {status === 'received' && (
        <CountryInfo>
          <Flag src={country.flags.png} />
          <Info>
            <Typography gutterBottom variant="h4" component="h2">
              {country.name}
            </Typography>
            <Typography variant="body2" component="div">
              <Typography variant="h6" component="span" sx={{ mr: 1 }}>
                Native Name
              </Typography>
              {country.name}
            </Typography>
            <Typography variant="body2" component="div">
              <Typography variant="h6" component="span" sx={{ mr: 1 }}>
                Population
              </Typography>
              {country.population}
            </Typography>
            <Typography variant="body2" component="div">
              <Typography variant="h6" component="span" sx={{ mr: 1 }}>
                Region
              </Typography>
              {country.region}
            </Typography>
            <Typography variant="body2" component="div">
              <Typography variant="h6" component="span" sx={{ mr: 1 }}>
                Sub Region
              </Typography>
              {country.subregion}
            </Typography>
            <Typography variant="body2" component="div">
              <Typography variant="h6" component="span" sx={{ mr: 1 }}>
                Capital
              </Typography>
              {country.capital}
            </Typography>
            <Typography variant="body2" component="div">
              <Typography variant="h6" component="span" sx={{ mr: 1 }}>
                Top Level Domain
              </Typography>
              {country.topLevelDomain[0]}
            </Typography>
            <Typography variant="body2" component="div">
              <Typography variant="h6" component="span" sx={{ mr: 1 }}>
                Currencies
              </Typography>
              {country.currencies[0].name}
            </Typography>
            <Typography variant="body2" component="div">
              <Typography variant="h6" component="span" sx={{ mr: 1 }}>
                Languages
              </Typography>
              {country.languages[0].name}
            </Typography>
          </Info>
        </CountryInfo>
      )}
    </Wrapper>
  );
};

export default CurrentCountry;
