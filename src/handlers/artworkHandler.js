const getArtwork = require("../controllers/usersControllers.js");

const getArtworkHandler = async (req, res) => {
  try {
    const { name } = req.body;
    const response = getArtwork();
    if (name) {
      let artworkName = response.filter((works) => {
        works.title.toLowerCase().includes(name.toLowerCase());
      });
      if (artworkName === null) {
        throw Error("Artwork not available");
      }
      res.status(200).json(artworkName);
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};

module.exports = {
  getArtworkHandler,
};
