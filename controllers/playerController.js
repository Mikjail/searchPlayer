const request = require('../util/request');
const errorHandler = require('../util/errorHandler');

class PlayerController {
  /**
   * Getting Basic
   * @param {*} req 
   * @param {*} res 
   */
  async getPlayerData({query: { playerId }}, res) {
    try {
      const dataAPI = `https://web-sandbox.onefootball.com/assignments/player/data/${playerId}.json`;
      const result = await request('get', dataAPI);
      if (result && result['profile-id']) {
        res.send(result)
      } else {
        res.send({})
      }
    } catch (error) {
      const response = errorHandler(err);
      res.send(response)
    }
  }

  async getPlayerProfileData({query: { profileId }}, res) {
    try {
      const profileAPI= `https://web-sandbox.onefootball.com/assignments/player/profile/${profileId}`;
      const result = await request('get', profileAPI);
      if (result && result.profile) {
        res.send(result)
      } else {
        res.send({})
      }
    } catch (error) {
      const response = errorHandler(err);
      res.send(response)
    }
  }
}

module.exports = new PlayerController;