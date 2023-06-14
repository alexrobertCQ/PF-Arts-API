const { getAllArtwork } = require("../../controllers/artworks/getController");

const getArtworkHandler = async (req, res) => {
  try {
    const { title } = req.query;
    const response = await getAllArtwork();
    if (title) {
      let artworkName = response.filter((works) => {
        return works.title.toLowerCase().includes(title.toLowerCase());
      });
      if (artworkName.length === 0) {
        throw Error("Artwork not available");
      }
      res.status(200).json(artworkName);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};
module.exports = getArtworkHandler;
