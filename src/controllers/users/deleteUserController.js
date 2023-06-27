const { User } = require('../../db');

const deleteUser = async (userId) => {
  const user = await User.findOne({
    where: {
      userId: userId,
    },
  });
  if (!user) {
    throw new Error('Artwork not found');
  } else if (user.userId !== userId) {
    throw new Error('Unauthorized');
  } else {
    await user.destroy();

    return {
      message: 'The user was deleted successfully',
      user,
    };
  }
};
module.exports = deleteUser;
