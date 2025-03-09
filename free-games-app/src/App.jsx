import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';
import GamesList from './component/GamesList';

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Free Games Explorer
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <GamesList />
      </Container>
    </>
  );
}

export default App;