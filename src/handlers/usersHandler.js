const {
  createUser,
  getUsers,
  getUserID,
} = require('../controllers/usersControllers.js');

const getUsersHandler = async (req, res) => {
  try {
    const response = await getUsers();
    res.status(201).json(response);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};

const getUserIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getUserID(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postUsersHandler = async (req, res) => {
  const {
    userName,
    profilePicture,
    description,
    email,
    phoneNumber,
    location,
  } = req.body;
  try {
    if (!userName) {
      throw Error('Missing data');
    }
    const newUser = await createUser(
      userName,
      profilePicture,
      description,
      email,
      phoneNumber,
      location
    );
    res.status(201).json(newUser);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};

module.exports = {
  postUsersHandler,
  getUsersHandler,
  getUserIdHandler,
};
