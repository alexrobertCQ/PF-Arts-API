const addFavorite = require('../../controllers/users/addFavorites');

const postFavoritesHandler = async (req, res) => {
  try {
    const { userId, artworkId } = req.params;
    const response = await addFavorite(userId, artworkId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postFavoritesHandler;
