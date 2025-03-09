import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  Button,
  CircularProgress,
  Box 
} from '@mui/material';
import { getFreeGames } from '../Services/api';

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGameDetails = async () => {
      try {
        const games = await getFreeGames();
        const selectedGame = games.find(g => g.id === parseInt(id));
        setGame(selectedGame);
      } catch (err) {
        setError('Failed to load game details.');
      } finally {
        setLoading(false);
      }
    };

    loadGameDetails();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" my={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !game) {
    return (
      <Container>
        <Typography color="error" align="center" my={4}>
          {error || 'Game not found'}
        </Typography>
        <Button component={Link} to="/" variant="contained">
          Back to Games List
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Card sx={{ my: 4 }}>
        <CardMedia
          component="img"
          height="300"
          image={game.thumbnail}
          alt={game.title}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {game.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {game.description || game.short_description}
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
          <Typography variant="body2" color="text.secondary">
            Release Date: {game.release_date}
          </Typography>
          <Box mt={2}>
            <Button component={Link} to="/" variant="contained">
              Back to Games List
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default GameDetails;