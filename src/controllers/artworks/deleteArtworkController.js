const { Artwork } = require('../../db');

const deleteArtwork = async (userId, artworkId) => {
  const artwork = await Artwork.findOne({
    where: {
      artworkId: artworkId,
      userId: userId,
    },
  });
  if (!artwork) {
    throw new Error('Artwork not found');
  } else if (artwork.userId !== userId) {
    throw new Error('Unauthorized');
  } else {
    await artwork.destroy({ force: false });

    return {
      message: 'The artwork was deleted successfully',
      artwork,
    };
  }
};
module.exports = deleteArtwork;
