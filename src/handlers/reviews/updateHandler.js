const updateReview = require('../../controllers/reviews/updateController')
const updateReviewHandler = async (req, res) => {
    const {artworkArtworkId} = req.params;
    const userUserId = req.userId;
    const {review,rating} = req.body;
    try {
      if (!artworkArtworkId || !review || !rating) {
        throw Error('Missing data');
      }
      const reviews = await updateReview(userUserId, artworkArtworkId,review,rating)
      res.status(200).json(reviews);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = updateReviewHandler;