import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Paper, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { setSearch, fetchByName } from '../../store/reducers/pokemon';

import { PokemonSearchProps } from './types';

const PokemonSearch: React.FC<PokemonSearchProps> = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  function changeSearchTerm(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  async function searchPokemon() {
    await dispatch(setSearch({ searchTerm }));
    await dispatch(fetchByName());
    setSearchTerm('');
  }

  return (
    <Paper>
      <Box
        sx={{
          p: '4px 20px',
          display: 'flex',
          alignItems: 'center',
          columnGap: 2,
        }}
      >
        <TextField
          variant="standard"
          sx={{ flexGrow: 1 }}
          placeholder="Search by Pokemon Name"
          value={searchTerm}
          onChange={changeSearchTerm}
        />
        <IconButton
          type="button"
          sx={{ p: '10px' }}
          aria-label="search"
          onClick={searchPokemon}
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default PokemonSearch;
