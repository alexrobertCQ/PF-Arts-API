const { Artwork, User, Category } = require('../../db');

//POST
const createArtwork = async (
  title,
  authorName,
  image,
  date,
  height,
  width,
  price,
  category,
  userId
) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw Error('User not found');
  }
  // const duplicate = await artworks.some((works) =>
  //   works.title.toLowerCase().includes(title.toLowerCase())
  // );
  // if (duplicate) {
  //   throw new Error('Artwork already exists');
  // }
  // else {
  const categoryName = await Category.create({ name: category });

  const newArtwork = await Artwork.create({
    title,
    authorName,
    image,
    date,
    height,
    width,
    price,
    userId,
    created: true,
  });

  await newArtwork.addCategory(categoryName);

  return newArtwork;
  // }
};

module.exports = createArtwork;
