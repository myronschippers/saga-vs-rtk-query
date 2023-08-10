import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { PokemonByNameResp } from '../../../api';
import { PokemonState, PokemonSearchPayload } from './types';

const initialState: PokemonState = {
  search: null,
  details: null,
  isLoadingSaga: false,
};

export const counterSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<PokemonSearchPayload>) => {
      state.search = action.payload.searchTerm;
    },
    clearSearch: (state) => {
      state.search = null;
    },
    setDetails: (state, action: PayloadAction<PokemonByNameResp>) => {
      state.details = action.payload;
      state.isLoadingSaga = false;
    },
    fetchByName: (state) => {
      state.details = null;
      state.isLoadingSaga = true;
    },
  },
});

export const { setDetails, setSearch, clearSearch, fetchByName } =
  counterSlice.actions;

export default counterSlice.reducer;
