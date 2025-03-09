import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Container, createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamesList from './component/GamesList';
import GameDetails from './component/GameDetails';

const theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5', // Light gray background
      paper: '#ffffff',   // White card background
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This will normalize styles */}
      <Router>
        <Routes>
          <Route path="/" element={<GamesList />} />
          <Route path="/game/:id" element={<GameDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;