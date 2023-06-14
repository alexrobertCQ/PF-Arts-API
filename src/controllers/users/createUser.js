const { User } = require('../db.js');

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

module.exports = createUser;
