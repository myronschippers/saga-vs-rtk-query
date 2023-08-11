import { Container, Stack, Grid } from '@mui/material';

import { PokemonDetails } from '../PokemonDetails';
import { PokemonSearch } from '../PokemonSearch';
import { PokemonSidebar } from '../PokemonSidebar';
import { AppHeader } from '../AppHeader';

function App() {
  return (
    <Stack direction="column">
      <AppHeader />

      <Container
        component="main"
        maxWidth="xl"
        sx={{ flexGrow: '2', paddingTop: '20px', paddingBottom: '40px' }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack direction="column" rowGap={4}>
              <PokemonSearch />

              <PokemonDetails />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <PokemonSidebar />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default App;
