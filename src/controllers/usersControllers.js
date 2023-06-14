const { Op } = require('sequelize');
const { User, Artwork } = require('../db.js');

//GET
const getUsers = async () => {
  const users = await User.findAll();
  if (users.length === 0) {
    throw Error('No users found');
  }
  return users;
};

//:id
const getUserID = async (id) => {
  const empty = await User.count();
  if (empty === 0) {
    throw Error('No info available');
  } else {
    const userByID = await User.findByPk(id, {
      include: {
        model: Artwork,
        attributes: ['title', 'image'],
      },
    });
    if (!userByID) {
      throw new Error('No match found');
    }
    return userByID;
  }
};

//POST
const createUser = async (
  userName,
  profilePicture,
  description,
  email,
  phoneNumber,
  location
) => {
  const allUser = await User.findAll();
  if (allUser.length > 0) {
    const duplicate = await allUser.some(
      (users) => users.userName.toLowerCase() === userName.toLowerCase()
    );
    if (duplicate) {
      throw Error('Username already exists');
    }
  }

  const newUser = await User.create({
    userName,
    profilePicture,
    description,
    email,
    phoneNumber,
    location,
  });
  console.log(newUser);
  return newUser;
};

module.exports = {
  getUsers,
  getUserID,
  createUser,
};
