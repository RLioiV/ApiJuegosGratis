import axios from 'axios';

const api = axios.create({
    baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
    headers: {
      'x-rapidapi-key':  import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  });



export const getFreeGames = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
};

export const getGameDetails = async (id) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    
    // Add detailed error logging
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Response:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      });
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Detailed API error:', {
      message: error.message,
      stack: error.stack
    });
    throw error;
  }
};
  
export default api;