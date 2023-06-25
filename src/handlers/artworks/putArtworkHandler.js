const updateArtwork = require('../../controllers/artworks/putController');

const putArtworkHandler = async (req, res) => {
  const userId = req.userId;
  const { artworkId } = req.params;
  const { title, authorName, date, price, height, width, category } = req.body;
  const image = typeof req.file === 'object' ? req.file.path : req.body.image;
  try {
    const response = await updateArtwork(
      artworkId,
      userId,
      title,
      authorName,
      image,
      height,
      width,
      date,
      price,
      category
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = putArtworkHandler;
