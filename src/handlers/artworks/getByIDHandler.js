const getArtID = require('../../controllers/artworks/getByIDController');

const getArtIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const response = await getArtID(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getArtIdHandler;
