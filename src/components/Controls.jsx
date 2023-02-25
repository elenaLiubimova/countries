import { Clear, SearchOutlined } from '@mui/icons-material';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setSearch } from '../redux/controls/controlsActions';
import { selectSearch } from '../redux/controls/controlsSelectors';

const Wrapper = styled.div`
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    row-gap: 28px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
  const [country, setCountry] = React.useState('');
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  const handleSearch = (evt) => {
    dispatch(setSearch(evt.target.value));
  }

  return (
    <Wrapper>
      <OutlinedInput
        startAdornment={<InputAdornment position="start">
          <SearchOutlined />
        </InputAdornment>}
        endAdornment={<InputAdornment position="end">
          <Clear />
        </InputAdornment>}
        placeholder="Search for a country"
        size="small"
        onChange={handleSearch}
      />
      <FormControl sx={{ width: 200 }}>
        <InputLabel>Filter by Region</InputLabel>
        <Select value={country} size="small">
          <MenuItem value={'Africa'}>Africa</MenuItem>
          <MenuItem value={'America'}>America</MenuItem>
          <MenuItem value={'Asia'}>Asia</MenuItem>
          <MenuItem value={'Europe'}>Europe</MenuItem>
          <MenuItem value={'Oceania'}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </Wrapper>
  );
};
