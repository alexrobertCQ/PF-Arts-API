const { User, Artwork } = require('../../db');
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

module.exports = getUserID;
