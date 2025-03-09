import axios from 'axios';

const api = axios.create({
    baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
    headers: {
      'x-rapidapi-key': 'fe1c41ab9cmsh079b657d77ff011p184e49jsn2525e0213e4c',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  });

  export const getFreeGames = async () => {
    try {
      const response = await api.get('/games');
      return response.data;
    } catch (error) {
      console.error('Error fetching games:', error);
      throw error;
    }
  };
  
  export default api;