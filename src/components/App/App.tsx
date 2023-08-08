import { Container, Stack } from '@mui/material';

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
        BODY CONTENT
      </Container>
    </Stack>
  );
}

export default App;
