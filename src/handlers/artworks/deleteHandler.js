const deleteArtwork = require('../../controllers/artworks/deleteArtworkController');

const deleteArtworkHandler = async (req, res) => {
  const userId = req.userId;
  const { artworkId } = req.params;
  try {
    const response = await deleteArtwork(userId, artworkId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteArtworkHandler;
