const { Artwork } = require('../../db');

// PUT
const updateArtwork = async (
  artworkId,
  title,
  authorName,
  image,
  date,
  height,
  width,
  price
) => {
  const artwork = await Artwork.findByPk(artworkId);
  if (!artwork) {
    throw Error('Artwork not found');
  }

  artwork.title = title;
  artwork.authorName = authorName;
  artwork.image = image;
  artwork.date = date;
  artwork.height = height;
  artwork.width = width;
  artwork.price = price;

  await artwork.save();

  return artwork;
};

module.exports = updateArtwork;