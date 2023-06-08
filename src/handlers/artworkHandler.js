const getArtwork = require("../controllers/usersControllers.js");

const getArtworkHandler = async (req, res) => {
  try {
    const response = getArtwork();
    res.status(200).json(response);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};

module.exports = {
  getArtworkHandler,
};
