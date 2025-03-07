const API_BASE_URL = 'https://www.freetogame.com/api';

module.exports = {
    API_BASE_URL
};

const axios = require('axios');
const { API_BASE_URL } = require('../config/api.config');

class FreeGamesAPI {
    constructor() {
        this.api = axios.create({
            baseURL: API_BASE_URL
        });
    }

    async getAllGames() {
        try {
            const response = await this.api.get('/games');
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch games: ${error.message}`);
        }
    }

    async getGameById(id) {
        try {
            const response = await this.api.get(`/game?id=${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch game with id ${id}: ${error.message}`);
        }
    }

    async getGamesByPlatform(platform = 'pc') {
        try {
            const response = await this.api.get(`/games?platform=${platform}`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch ${platform} games: ${error.message}`);
        }
    }

    async getGamesByCategory(category) {
        try {
            const response = await this.api.get(`/games?category=${category}`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch ${category} games: ${error.message}`);
        }
    }
}

module.exports = FreeGamesAPI;