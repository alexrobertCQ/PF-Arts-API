const createUser = require('../../controllers/users/createUser');

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

module.exports = postUsersHandler;
