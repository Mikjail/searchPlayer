const PlayerController = require('../controllers/playerController');

module.exports = app => {
    app.get('/api/player', PlayerController.getPlayerData);

    app.get('/api/profile', PlayerController.getPlayerProfileData);
}
