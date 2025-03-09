import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Grid, 
  Container, 
  CircularProgress, 
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { getFreeGames } from '../Services/api';  // Updated casing here
import { Link } from 'react-router-dom';

const GamesList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('all');

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await getFreeGames();
        setGames(data);
      } catch (err) {
        setError('Failed to load games. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  const getUniqueGenres = () => {
    const genres = games.map(game => game.genre);
    return ['all', ...new Set(genres)];
  };

  const filteredGames = selectedGenre === 'all' 
    ? games 
    : games.filter(game => game.genre === selectedGenre);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" my={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box my={4}>
        <Typography color="error" align="center">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        align="center" 
        gutterBottom 
        sx={{ my: 3 }}
      >
        Free Games List
      </Typography>

      <Box sx={{ minWidth: 120, mb: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="genre-select-label">Filter by Genre</InputLabel>
          <Select
            labelId="genre-select-label"
            id="genre-select"
            value={selectedGenre}
            label="Filter by Genre"
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {getUniqueGenres().map((genre) => (
              <MenuItem key={genre} value={genre}>
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      
      <Grid container spacing={3}>
        {filteredGames.map((game) => (
          <Grid item xs={12} sm={6} md={4} key={game.id}>
            <Card 
              component={Link} 
              to={`/game/${game.id}`} 
              sx={{ 
                textDecoration: 'none',
                backgroundColor: '#ffffff',
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                },
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={game.thumbnail}
                alt={game.title}
              />
              <CardContent sx={{ flexGrow: 1, bgcolor: '#ffffff' }}>
                <Typography gutterBottom variant="h6" component="div">
                  {game.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {game.short_description}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  Genre: {game.genre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Platform: {game.platform}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GamesList;