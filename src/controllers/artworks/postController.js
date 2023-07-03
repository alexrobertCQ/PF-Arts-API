const { Artwork, User, Category } = require('../../db');

//POST
const createArtwork = async (
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
  console.log(userId);
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
  const categoryName = await Category.findOne({
    where: { name: category },
  });

  const newArtwork = await Artwork.create({
    userId,
    title,
    authorName,
    image,
    height,
    width,
    date,
    price,
    created: true,
  });

  await newArtwork.addCategory(categoryName);

  return newArtwork;
  // }
};

module.exports = createArtwork;
