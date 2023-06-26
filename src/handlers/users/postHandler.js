const createUser = require('../../controllers/users/createUser');

const postUsersHandler = async (req, res) => {
  const { userName, profilePicture, description, email, password, phoneNumber, location, googleUser } = req.body;
  try {
    if (!userName || !email || !password) {
      throw Error('Missing data');
    }
    const newUser = await createUser(userName, profilePicture, description, email, password, phoneNumber, location, googleUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};

module.exports = postUsersHandler;
