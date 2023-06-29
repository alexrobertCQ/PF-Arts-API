const deleteFavs = require('../../controllers/favs/deleteFavorites');

const deleteFavsHandler = async (req, res) => {
  const { userId, artworkId } = req.params;
  try {
    const response = await deleteFavs(userId, artworkId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteFavsHandler;
