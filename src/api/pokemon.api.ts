import { BASE_API_URL } from './constants';

import { PokemonByNameResp } from './pokemon.types';

export async function fetchPokemonByName(
  name: string
): Promise<PokemonByNameResp> {
  try {
    const nameForUrl = encodeURIComponent(name.toLowerCase());
    const response = await fetch(`${BASE_API_URL}pokemon/${nameForUrl}/`, {
      method: 'GET',
    });

    if (response.status === 404) {
      throw new Error('The Pokemon was not found.');
    }

    return response.json();
  } catch (err: unknown) {
    console.error(err);

    throw new Error(
      typeof err === 'string'
        ? err
        : 'There was an issue with the search please try again.'
    );
  }
}
