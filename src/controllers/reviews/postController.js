const { Review } = require('../../db');

const createReview = async (userUserId, artworkArtworkId, review, rating) => {
  const newReview = await Review.create({
    userUserId,
    artworkArtworkId,
    review,
    rating,
  });
  return newReview;
};
module.exports = createReview;
