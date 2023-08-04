import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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
    setDetails: (state, action: PayloadAction<unknown>) => {
      state.details = action.payload;
    },
  },
});

export const { setDetails, setSearch, clearSearch } = counterSlice.actions;

export default counterSlice.reducer;
