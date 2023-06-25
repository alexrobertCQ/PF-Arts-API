const deleteUser = require('../../controllers/users/deleteUserController');

const deleteUsersHandler = async (req, res) => {
  const userId = req.userId;
  try {
    const response = await deleteUser(userId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteUsersHandler;
