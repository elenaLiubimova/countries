import { SearchOutlined } from '@mui/icons-material';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';
import styled from 'styled-components';

// const optionsMap = {
//   'Africa': { value: 'Africa', label: 'Africa' },
//   'America': { value: 'America', label: 'America' },
//   'Asia': { value: 'Asia', label: 'Asia' },
//   'Europe': { value: 'Europe', label: 'Europe' },
//   'Oceania': { value: 'Oceania', label: 'Oceania' },
// }
// const options = Object.values(optionsMap);

const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const Wrapper = styled.div`
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
  const [country, setCountry] = React.useState('');

  return (
    <Wrapper>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
        placeholder="Search for a country"
        variant="outlined"
        size="small"
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
