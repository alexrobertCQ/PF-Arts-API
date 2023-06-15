const createArtwork = require('../../controllers/artworks/postController');

const postArtworkHandler = async (req, res) => {
  const { title, authorName, image, date, price, height, width, userId } =
    req.body;
  try {
    if (!title || !authorName || !image || !date || !userId) {
      throw Error('Missing data');
    }
    const response = await createArtwork(
      title,
      authorName,
      image,
      date,
      height,
      width,
      price,
      userId
    );
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postArtworkHandler;
