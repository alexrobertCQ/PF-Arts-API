const { User } = require('../../db.js');

const updateUser = async (id, userName, profilePicture, description, password, phoneNumber, location, googleUser) => {
  const user = await User.findByPk(id);

  if (!user) {
    throw Error('User not found');
  }
  if (user.userId !== id) {
    throw Error('You are not authorized to update this user');
  }

  const updatedUser = await user.update(Object.assign({}, userName && { userName }, profilePicture && { profilePicture }, description && { description }, password && { password }, phoneNumber && { phoneNumber }, location && { location }, googleUser && { googleUser }));

  return updatedUser;
};

module.exports = updateUser;
