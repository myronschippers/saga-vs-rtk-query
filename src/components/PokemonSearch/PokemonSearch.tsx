import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Paper, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { setSearch } from '../../store/reducers/pokemon';

import { PokemonSearchProps } from './types';

const PokemonSearch: React.FC<PokemonSearchProps> = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  function searchPokemon() {
    dispatch(setSearch({ searchTerm }));
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
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
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
