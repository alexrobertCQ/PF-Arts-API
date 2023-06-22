const updateArtwork = require('../../controllers/artworks/putController');

const putArtworkHandler = async (req, res) => {
  const artworkId = req.params.id;
  const { title, authorName, image, date, price, height, width } = req.body;
  try {
    if (!title || !authorName || !image || !date) {
      throw Error('Missing data');
    }
    const response = await updateArtwork(
      artworkId,
      title,
      authorName,
      image,
      date,
      height,
      width,
      price
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = putArtworkHandler;