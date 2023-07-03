const { Review } = require('../../db');

const deleteReview = async (userUserId,artworkArtworkId) => {
  const review = await Review.findOne({
    where: {
        userUserId: userUserId,
        artworkArtworkId: artworkArtworkId,
    },
  });
  if (!review) {throw new Error('Review not found');} 
    await review.destroy();
    await review.save();
    return {message: 'The review was deleted successfully'};
};

module.exports = deleteReview;