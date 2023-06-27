const { User, Artwork } = require('../../db');
const getFavs = async (userId) => {
  const empty = await User.count();
  if (empty === 0) {
    throw Error('No info available');
  } else {
    const favorites = await User.findByPk(userId, {
      include: {
        model: Artwork,
        attributes: ['title', 'image', 'favorites'],
        through: {
          attributes: [],
        },
      },
    });
    if (!favorites) {
      throw new Error('No match found');
    }
    return favorites;
  }
};

module.exports = getFavs;
