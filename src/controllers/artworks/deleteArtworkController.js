const { Artwork } = require('../../db');

const deleteArtwork = async (id) => {
  const artwork = await Artwork.findByPk(id, {
    attributes: ['id', 'title'],
  });
  if (!artwork) {
    throw Error('Artwork not found');
  } else {
    await artwork.destroy({ force: false });

    return {
      message: 'The artwork was deleted successfully',
      artwork,
    };
  }
};
module.exports = deleteArtwork;
