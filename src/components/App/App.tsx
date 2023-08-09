import { Container, Stack } from '@mui/material';

import { PokemonSearch } from '../PokemonSearch';
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
        <PokemonSearch />
      </Container>
    </Stack>
  );
}

export default App;
