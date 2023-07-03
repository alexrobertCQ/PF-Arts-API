const { Artwork, User, Category } = require('../../db');

const getArtID = async (id) => {
  const empty = await Artwork.count();
  if (empty === 0) {
    throw Error('No info available');
  } else {
    const artworkByID = await Artwork.findByPk(id, {
      include: [
        {
          model: User,
          attributes: ['userName'],
        },
        {
          model: Category,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      ],
    });
    if (!artworkByID) {
      throw new Error('No match found');
    }
    return artworkByID;
  }
};

module.exports = getArtID;
