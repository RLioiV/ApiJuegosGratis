import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container, CircularProgress } from '@mui/material';

const GamesList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'fe1c41ab9cmsh079b657d77ff011p184e49jsn2525e0213e4c',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch games');
        }

        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color="error" align="center">
          Error: {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {games.map((game) => (
          <Grid item key={game.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image={game.thumbnail}
                alt={game.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {game.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Genre: {game.genre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Platform: {game.platform}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Publisher: {game.publisher}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
