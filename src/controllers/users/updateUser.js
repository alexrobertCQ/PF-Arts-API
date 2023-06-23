const { User } = require('../../db.js');

const updateUser = async (id, userName, profilePicture, description, password, phoneNumber, location) => {
  try {
    console.log("idcontroller",id);
    const user = await User.findByPk(id);
    console.log(user);

    if (!user) {
      throw Error('User not found');
    }

    // Verificar si el usuario intenta modificar el userId o el email
    if (user.userId !== id) {
      throw Error('You are not authorized to update this user');
    }


    const updatedUser = await user.update({
      userName,
      profilePicture,
      description,
      password,
      phoneNumber,
      location
    });

    return updatedUser;
  } catch (error) {
    throw error;
  }
};

module.exports = updateUser;
