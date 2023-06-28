const { User, Artwork } = require('../../db');

const addFavorite = async (userId, artworkId) => {
  const user = await User.findByPk(userId);
  const artwork = await Artwork.findByPk(artworkId);

  if (!user || !artwork) {
    throw new Error('User or Artwork not found');
  }

  await user.addUserFav(artwork, { through: 'favorites' });

  return { message: 'Artwork added to favorites' };
};

module.exports = addFavorite;
