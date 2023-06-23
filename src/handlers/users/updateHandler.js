const updateUser = require('../../controllers/users/updateUser');

const updateUsersHandler = async (req, res) => {
  const id = req.userId;
  console.log(id);
  const { userName, description, email, password, phoneNumber, location } = req.body;
  const profilePicture = typeof req.file === 'object' ? req.file.path : req.body.profilePicture;
  try {
    const updatedUser = await updateUser(id, userName, profilePicture, description, email, password, phoneNumber, location);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};

module.exports = updateUsersHandler;
