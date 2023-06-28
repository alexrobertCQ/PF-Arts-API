const { Artwork, Category } = require('../../db');

// PUT
const updateArtwork = async (
  artworkId,
  userId,
  title,
  authorName,
  image,
  height,
  width,
  date,
  price,
  category
) => {
  const artwork = await Artwork.findByPk(artworkId, {
    include: {
      model: Category,
      attributes: ['name'],
      through: {
        attributes: [],
      },
    },
  });
  if (!artwork) {
    throw Error('Artwork not found');
  }

  if (artwork.userId !== userId) {
    throw Error('You are not authorized to update this artwork');
  }

  if (category) {
    let existingCategory = await Category.findOne({
      where: { name: category },
    });

    await artwork.setCategories(existingCategory);
  }

  const updatedArtwork = await artwork.update(
    Object.assign(
      {},
      title && { title },
      authorName && { authorName },
      image && { image },
      height && { height },
      width && { width },
      date && { date },
      price && { price }
    )
  );

  return updatedArtwork;
};

module.exports = updateArtwork;
