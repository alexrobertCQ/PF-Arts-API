const { response } = require('express');
const deleteArtwork = require('../../controllers/artworks/deleteArtworkController');

const deleteArtworkHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteArtwork(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteArtworkHandler;
