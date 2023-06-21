const createArtwork = require('../../controllers/artworks/postController');
const cloudinary = require('../../utils/cloudinary');
const postArtworkHandler = async (req, res) => {
  const { title, authorName, image, date, price, height, width, userId } =
    req.body;
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: 'artworks',
    });
    if (
      !title ||
      !authorName ||
      !image ||
      !date ||
      !price ||
      !height ||
      !width ||
      !userId
    ) {
      throw Error('Missing data');
    }
    const response = await createArtwork(
      title,
      authorName,
      {
        public_id: result.public_id,
        url: result.secure_url,
      },
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
