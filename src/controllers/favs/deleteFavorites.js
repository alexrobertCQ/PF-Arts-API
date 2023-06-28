const { User, Artwork } = require('../../db');

const deleteFavs = async (userId, artworkId) => {
  const user = await User.findByPk(userId);
  const artwork = await Artwork.findByPk(artworkId);

  if (!user || !artwork) {
    throw new Error('User or Artwork not found');
  }

  await user.removeUserFav(artwork);

  return { message: 'Artwork removed from favorites' };
};
module.exports = deleteFavs;
