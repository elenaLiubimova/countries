import { SearchOutlined } from '@mui/icons-material';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';
import styled from 'styled-components';

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
