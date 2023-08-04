export interface PokemonState {
  search: string | null;
  details: unknown | null;
  isLoadingSaga: boolean;
}

export interface PokemonSearchPayload {
  searchTerm: string;
}
