import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import './index.css';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    onSearch(city);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <TextField
          label="Enter city"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleSearchClick}>
          OK
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
