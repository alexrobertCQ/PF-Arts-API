const { Artwork, Category } = require('../../db');

// PUT
const updateArtwork = async (
  artworkId,
  userId,
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

  if (artwork.userId !== userId) {
    throw Error('You are not authorized to update this artwork');
  }

  const updatedArtwork = await artwork.update(
    Object.assign(
      {},
      title && { title },
      authorName && { authorName },
      image && { image },
      date && { date },
      height && { height },
      width && { width },
      price && { price }
    )
  );

  return updatedArtwork;
};

module.exports = updateArtwork;
