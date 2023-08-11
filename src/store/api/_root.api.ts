import { pokemonApi } from './pokemon';

const rootApiReducer = {
  [pokemonApi.reducerPath]: pokemonApi.reducer,
};

export default rootApiReducer;
