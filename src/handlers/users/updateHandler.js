const updateUser = require('../../controllers/users/updateUser');

const updateUsersHandler = async (req, res) => {
  const id = req.userId;
  console.log(id);
  const { userName, profilePicture, description, email, password, phoneNumber, location } = req.body;

  try {
    if (!userName || !email || !password) {
      throw Error('Missing data');
    }

    const updatedUser = await updateUser(id, userName, profilePicture, description, email, password, phoneNumber, location);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};

module.exports = updateUsersHandler;
