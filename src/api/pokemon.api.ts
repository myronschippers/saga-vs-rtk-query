import { BASE_API_URL } from './constants';

import { PokemonByNameResp, PokemonSpeciesTrunk } from './pokemon.types';

export async function fetchPokemonByName(
  name: string
): Promise<PokemonByNameResp> {
  try {
    const nameForUrl = encodeURIComponent(name.toLowerCase());
    const response = await fetch(`${BASE_API_URL}pokemon/${nameForUrl}/`, {
      method: 'GET',
    });
    const responseDetails = await response.json();

    // Evolution Chain ID is not the same as Pokemon ID
    const responseSpecies = await fetch(
      `${BASE_API_URL}pokemon-species/${nameForUrl}/`,
      { method: 'GET' }
    );
    const responseSpeciesData: PokemonSpeciesTrunk =
      await responseSpecies.json();
    const evoChainUrlSet = responseSpeciesData.evolution_chain.url.split('/');

    if (response.status === 404) {
      throw new Error('The Pokemon was not found.');
    }

    return {
      ...responseDetails,
      evolution_id: parseInt(evoChainUrlSet[evoChainUrlSet.length - 2]),
    };
  } catch (err: unknown) {
    console.error(err);

    throw new Error(
      typeof err === 'string'
        ? err
        : 'There was an issue with the search please try again.'
    );
  }
}
