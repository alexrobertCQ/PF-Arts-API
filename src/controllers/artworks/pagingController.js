const { Artwork } = require('../../db');
const artworksPaging = async (pag) => {
    const limit = 5;
    const offset = pag * limit - limit;
    const data = await Artwork.findAndCountAll({
      offset: offset,
      limit: limit,
    });
    return data;
  };

  module.exports = artworksPaging;