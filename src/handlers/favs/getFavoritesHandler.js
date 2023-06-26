const getFavs = require('../../controllers/users/getByID');

const getFavsHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await getFavs(userId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getFavsHandler;
