const { Artwork, User } = require('../../db');

//POST
const createArtwork = async (
  title,
  authorName,
  imageURL,
  date,
  height,
  width,
  price,
  userId
) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw Error('User not found');
  }
  const artworks = await Artwork.findAll();
  if (!artworks) {
    throw Error('No artworks available');
  }
  const duplicate = await artworks.some((works) =>
    works.title.toLowerCase().includes(title.toLowerCase())
  );
  if (duplicate) {
    throw new Error('Artwork already exists');
  } else {
    const newArtwork = await Artwork.create({
      title,
      authorName,
      imageURL,
      date,
      height,
      width,
      price,
      userId,
      created: true,
    });
    return newArtwork;
  }
};

module.exports = createArtwork;
