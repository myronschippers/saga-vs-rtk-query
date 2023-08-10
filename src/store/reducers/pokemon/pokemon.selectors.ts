import { RootState } from '../_root.reducer';

export const selectSearch = (state: RootState) => state.pokemon.search;
export const selectDetails = (state: RootState) => state.pokemon.details;
export const selectLoading = (state: RootState) => state.pokemon.isLoadingSaga;
