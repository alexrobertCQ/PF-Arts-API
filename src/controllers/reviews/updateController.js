const { Review } = require('../../db');

const updateReview = async (userUserId,artworkArtworkId,review,rating) => {
  const update = await Review.update({
    review: review,
    rating: rating,
    }, {
    where: {
        userUserId: userUserId,
        artworkArtworkId: artworkArtworkId,
    },
  });
  if (!update) {throw new Error('Review not found');} 
   
    return {message: 'The review was update successfully',update};
};

module.exports = updateReview;