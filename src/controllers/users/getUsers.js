const { Op } = require('sequelize');
const { User } = require('../../db');

const getUsers = async () => {
  const users = await User.findAll();
  if (users.length === 0) {
    throw Error('No users found');
  }
  return users;
};
module.exports = getUsers;
