import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_API_URL } from '../../../api';
import { PokemonEvolutionRespData } from './types';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getPokemonEvolutionById: builder.query<PokemonEvolutionRespData, number>({
      query: (pokemonId) => `evolution-chain/${pokemonId}/`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonEvolutionByIdQuery } = pokemonApi;
