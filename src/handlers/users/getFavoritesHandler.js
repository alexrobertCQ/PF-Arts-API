const getFavorites = require('../../controllers/users/getByID');

const getFavoritesHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getFavorites(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getFavoritesHandler;
