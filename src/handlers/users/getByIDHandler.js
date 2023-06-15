const getUserID = require('../../controllers/users/getByID');

const getUserIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getUserID(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getUserIdHandler;
