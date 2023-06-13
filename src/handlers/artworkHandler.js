const {
  getAllArtwork,
  createArtwork,
} = require('../controllers/artworkController.js');

const getArtworkHandler = async (req, res) => {
  try {
    const { title } = req.query;
    const response = await getAllArtwork();
    if (title) {
      let artworkName = response.filter((works) => {
        return works.title.toLowerCase().includes(title.toLowerCase());
      });
      if (artworkName.length === 0) {
        throw Error('Artwork not available');
      }
      res.status(200).json(artworkName);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};

const postArtworkHandler = async (req, res) => {
  const { title, artistName, image, completitionYear, userId } = req.body;
  try {
    if (!title || !artistName || !image || !completitionYear || !userId) {
      throw Error('Missing data');
    }
    const response = await createArtwork(
      title,
      artistName,
      image,
      completitionYear,
      userId
    );
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getArtworkHandler,
  postArtworkHandler,
};
