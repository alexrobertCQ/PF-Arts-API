const createArtwork = require('../../controllers/artworks/postController');
const cloudinary = require('../../utils/cloudinary');

console.log(cloudinary);
const postArtworkHandler = async (req, res) => {
  const { title, authorName, date, price, height, width, userId } = req.body;
  const image = req.file.path;

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
      throw new Error('Missing data');
    }

    const result = await cloudinary.uploader.upload(image);

    const imageURL = result.secure_url;

    const response = await createArtwork(
      title,
      authorName,
      imageURL,
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
