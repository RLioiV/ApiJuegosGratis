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
import { getGameDetails } from '../Services/api';

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGameDetails = async () => {
      if (!id) {
        setError('Invalid game ID');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        // Log the ID being fetched
        console.log('Fetching game ID:', id);
        
        const data = await getGameDetails(id);
        
        if (!data) {
          throw new Error('No game data received');
        }
        
        setGame(data);
      } catch (err) {
        console.error('Error loading game details:', {
          message: err.message,
          id: id
        });
        setError('Failed to load game details. Please try again later.');
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
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Card sx={{ 
        backgroundColor: '#ffffff',
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <CardMedia
          component="img"
          height="400"
          image={game.thumbnail}
          alt={game.title}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {game.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {game.description}
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
          <Box mt={3}>
            <Button 
              component={Link} 
              to="/" 
              variant="contained" 
              sx={{ mr: 2 }}
            >
              Back to Games List
            </Button>
            <Button 
              href={game.game_url} 
              target="_blank" 
              variant="contained" 
              color="secondary"
            >
              Play Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default GameDetails;