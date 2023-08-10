import { PokemonByNameResp } from '../../../api';

export interface PokemonState {
  search: string | null;
  details: PokemonByNameResp | null;
  isLoadingSaga: boolean;
}

export interface PokemonSearchPayload {
  searchTerm: string;
}
