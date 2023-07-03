const { User } = require('../../db.js');

const createUser = async (
  userName,
  profilePicture,
  description,
  email,
  password,
  phoneNumber,
  location,
  fb,
  tw,
  ig,
  googleUser,
  verified
) => {
  const allUser = await User.findAll();
  // if (allUser.length > 0) {
  //   const duplicate = await allUser.some((users) => users.userName.toLowerCase() === userName.toLowerCase());
  //   if (duplicate) {
  //     throw Error('Username already exists');
  //   }
  // }
  const duplicateEmail = await allUser.some(
    (users) => users.email.toLowerCase() === email.toLowerCase()
  );
  if (duplicateEmail) {
    throw Error('An account with this email already exists');
  }
  const newUser = await User.create({
    userName,
    profilePicture,
    description,
    email,
    password,
    phoneNumber,
    location,
    fb,
    tw,
    ig,
    googleUser,
    verified,
  });
  return newUser;
};

module.exports = createUser;
