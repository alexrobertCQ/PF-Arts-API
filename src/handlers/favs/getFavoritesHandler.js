const getFavs = require('../../controllers/favs/getFavorites');

const getFavsHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(userId);
    const response = await getFavs(userId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getFavsHandler;
