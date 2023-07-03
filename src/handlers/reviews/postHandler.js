const createReview = require('../../controllers/reviews/postController');
const postReviewsHandler = async (req, res) => {
  const userUserId = req.userId;
  const { artworkArtworkId } = req.params;
  const { review, rating } = req.body;
  console.log(req.body);
  try {
    if (!artworkArtworkId || !review || !rating) {
      throw Error('Missing data');
    }
    const newReview = await createReview(
      userUserId,
      artworkArtworkId,
      review,
      rating
    );
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postReviewsHandler;
