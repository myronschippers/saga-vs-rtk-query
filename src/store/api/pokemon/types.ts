interface PokemonSpecies {
  name: string;
  url: string;
}

interface EvoChainEvolutionDetailsItem {
  gender: string | null;
  held_item: string | null;
  item: { name: string; url: string };
  known_move: string | null;
  known_move_type: string | null;
  location: string | null;
  min_affection: string | null;
  min_beauty: string | null;
  min_happiness: string | null;
  min_level: string | null;
  needs_overworld_rain: boolean;
  party_species: string | null;
  party_type: string | null;
  relative_physical_stats: string | null;
  time_of_day: string | null;
  trade_species: string | null;
  trigger: { name: string; url: string };
  turn_upside_down: boolean;
}

export interface EvoChainEvolveToItem {
  evolution_details: EvoChainEvolutionDetailsItem[];
  evolves_to: EvoChainEvolveToItem[];
  is_baby: boolean;
  species: PokemonSpecies;
}

export interface PokemonEvolutionRespData {
  baby_trigger_item: string | null;
  chain: EvoChainEvolveToItem;
  id: number;
}
