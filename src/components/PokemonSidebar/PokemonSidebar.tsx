import { useSelector } from 'react-redux';
import { Card, CardContent, Typography } from '@mui/material';

import { selectDetails } from '../../store/reducers/pokemon/pokemon.selectors';

function PokemonSidebar() {
  const pokemonDetailsData = useSelector(selectDetails);

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3" mb={2}>
          Evolution
        </Typography>
        {pokemonDetailsData && (
          <Typography>
            Evolution of {pokemonDetailsData.name.toUpperCase()} with ID,{' '}
            {pokemonDetailsData.id}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default PokemonSidebar;
