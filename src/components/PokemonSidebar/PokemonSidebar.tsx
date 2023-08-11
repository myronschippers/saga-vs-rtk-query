import { useSelector } from 'react-redux';
import { Card, CardContent, Typography } from '@mui/material';

import { selectDetails } from '../../store/reducers/pokemon/pokemon.selectors';
import { PokemonEvolution } from '../PokemonEvolution';

function PokemonSidebar() {
  const pokemonDetailsData = useSelector(selectDetails);

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3" mb={2}>
          Evolution
        </Typography>
        {pokemonDetailsData && (
          <PokemonEvolution pokemonId={pokemonDetailsData.id} />
        )}
      </CardContent>
    </Card>
  );
}

export default PokemonSidebar;
