export interface PokemonVersion {
  name: string;
  url: string;
}
export interface PokemonVersionDetail {
  rarity: number;
  version: PokemonVersion;
}
export interface PokemonVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

export interface PokemonAbilityItem {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
export interface PokemonFormItem {
  name: string;
  url: string;
}
export interface PokemonGameIndicyItem {
  game_index: number;
  version: PokemonVersion;
}
export interface PokemonHeldItem {
  item: {
    name: string;
    url: string;
  };
  version_details: PokemonVersionDetail[];
}
export interface PokemonMoveItem {
  move: {
    name: string;
    url: string;
  };
  version_group_details: PokemonVersionGroupDetail[];
}
export interface PokemonPastTypeItem {}
export interface PokemonStatItem {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
export interface PokemonTypeItem {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonByNameResp {
  abilities: PokemonAbilityItem[];
  base_experience: number;
  forms: PokemonFormItem[];
  game_indices: PokemonGameIndicyItem[];
  height: number;
  held_items: PokemonHeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMoveItem[];
  name: string;
  order: number;
  past_types: PokemonPastTypeItem[];
  species: { name: string; url: string };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      'official-artwork': {
        front_default: string | null;
        front_shiny: string | null;
      };
    };
  };
  stats: PokemonStatItem[];
  types: PokemonTypeItem[];
  weight: number;
}
