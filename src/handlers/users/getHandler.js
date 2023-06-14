const getUsers = require ('../../controllers/users/getUsers');

const getUsersHandler = async (req, res) => {
  try {
    const response = await getUsers();
    res.status(201).json(response);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};

module.exports = getUsersHandler;