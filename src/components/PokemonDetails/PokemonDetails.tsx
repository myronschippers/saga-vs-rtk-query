import { useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardContent,
  Chip,
  Stack,
  Divider,
  Typography,
} from '@mui/material';

import {
  selectDetails,
  selectLoading,
} from '../../store/reducers/pokemon/pokemon.selectors';
import { PokemonDetailsProps } from './types';

function PokemonDetails({
  loadingMsg = 'Loading Pokemon Info',
}: PokemonDetailsProps) {
  const pokemonDetailsData = useSelector(selectDetails);
  const isLoading = useSelector(selectLoading);

  return (
    <Card>
      {pokemonDetailsData && (
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 100, height: 100 }}
              aria-label={pokemonDetailsData.name}
              src={pokemonDetailsData.sprites.front_default || undefined}
            >
              {pokemonDetailsData.name[0].toUpperCase()}
            </Avatar>
          }
          title={pokemonDetailsData.name.toUpperCase()}
          subheader={`Species is ${pokemonDetailsData.species.name}`}
        />
      )}
      <CardContent>
        {isLoading && (
          <Typography gutterBottom variant="h5" component="h3" mb={2}>
            {loadingMsg}
          </Typography>
        )}
        {pokemonDetailsData && (
          <>
            <Divider variant="middle" sx={{ mx: 0 }} />
            <Box sx={{ mx: 3, my: 2 }}>
              <Stack direction="row" columnGap={2}>
                <Typography gutterBottom variant="body1" color="text.secondary">
                  Height: {pokemonDetailsData.height}
                </Typography>
                <Typography gutterBottom variant="body1" color="text.secondary">
                  Weight: {pokemonDetailsData.weight}
                </Typography>
              </Stack>
            </Box>
            <Divider variant="middle" sx={{ mx: 0 }} />
            <Box sx={{ mx: 3, my: 2 }}>
              <Typography variant="body1" color="text.secondary" mb={2}>
                Abilities
              </Typography>
              <Stack direction="row" spacing={1}>
                {pokemonDetailsData &&
                  pokemonDetailsData.abilities.map((abilityItem) => {
                    return <Chip label={abilityItem.ability.name} />;
                  })}
              </Stack>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default PokemonDetails;
