const { Op } = require("sequelize");
const { User } = require("../db.js");

const getUsers = async () => {
  const user = await User.findAll();
  return user;
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
