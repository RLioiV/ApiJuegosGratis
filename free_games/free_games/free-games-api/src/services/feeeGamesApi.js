const FreeGamesAPI = require('./services/freeGamesApi');

const api = new FreeGamesAPI();

async function main() {
    try {
        // Get all games
        const allGames = await api.getAllGames();
        console.log('Total games:', allGames.length);

        // Get specific game by ID
        const game = await api.getGameById(452); // League of Legends
        console.log('Single game:', game.title);

        // Get games by platform
        const browserGames = await api.getGamesByPlatform('browser');
        console.log('Browser games:', browserGames.length);

        // Get games by category
        const mmorpgGames = await api.getGamesByCategory('mmorpg');
        console.log('MMORPG games:', mmorpgGames.length);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();