const { Op } = require('sequelize');
const { User } = require('../db.js');

const getUsers = async () => {
  const users = await User.findAll();
  if (users.length === 0) {
    throw Error('No users found');
  }
  return users;
};

const createUser = async (name, image, description) => {
  const newUser = await User.create({ name, image, description });
  console.log(newUser);
  return newUser;
};

module.exports = {
  getUsers,
  createUser,
};
