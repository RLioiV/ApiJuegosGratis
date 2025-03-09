import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Grid, 
  Container, 
  CircularProgress, 
  Box 
} from '@mui/material';
import { getFreeGames } from '../services/api';

const GamesList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <Container>
      <Typography 
        variant="h4" 
        component="h1" 
        align="center" 
        gutterBottom 
        sx={{ my: 3 }}
      >
        Free Games List
      </Typography>
      
      <Grid container spacing={3}>
        {games.map((game) => (
          <Grid item xs={12} sm={6} md={4} key={game.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={game.thumbnail}
                alt={game.title}
              />
              <CardContent>
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