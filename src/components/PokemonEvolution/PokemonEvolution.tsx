import { ReactNode } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

import {
  useGetPokemonEvolutionByIdQuery,
  EvoChainEvolveToItem,
} from '../../store/services/pokemon';
import SpeciesListItem from './SpeciesListItem';
import { PokemonEvolutionProps } from './types';

function PokemonEvolution({ evolutionId }: PokemonEvolutionProps) {
  const { data, error, isLoading } =
    useGetPokemonEvolutionByIdQuery(evolutionId);

  if (isLoading) {
    return <Typography>LOADING</Typography>;
  }

  function createEvoSpeciesItem(evoChain: EvoChainEvolveToItem): ReactNode {
    const locationData = evoChain.evolution_details[0]
      ? evoChain.evolution_details[0].location
      : null;

    return (
      <>
        <SpeciesListItem name={evoChain.species.name} location={locationData} />

        {evoChain.evolves_to[0] && (
          <>
            <Divider variant="inset" component="li" />
            {createEvoSpeciesItem(evoChain.evolves_to[0])}
          </>
        )}
      </>
    );
  }

  return (
    <List>
      {error && (
        <ListItem alignItems="flex-start">
          <ListItemText primary="An error has occurred please try again" />
        </ListItem>
      )}
      {data && createEvoSpeciesItem(data.chain)}
    </List>
  );
}

export default PokemonEvolution;
