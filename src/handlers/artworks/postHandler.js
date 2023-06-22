const createArtwork = require('../../controllers/artworks/postController');
const postArtworkHandler = async (req, res) => {
  const { title, authorName, date, price, height, width, userId } = req.body;
  const image = typeof req.file === 'object' ? req.file.path : req.body.image;

  try {
    if (
      !title ||
      !authorName ||
      !date ||
      !price ||
      !height ||
      !width ||
      !userId ||
      !image
    ) {
      throw new Error('Missing or indvalid data');
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
