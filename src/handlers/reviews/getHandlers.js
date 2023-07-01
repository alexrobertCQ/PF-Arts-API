const getReviewsArtwork = require('../../controllers/reviews/getController')
const getReviewsArtworkHandler = async (req, res) => {
    const {artworkArtworkId} = req.params;
    try {
      if (!artworkArtworkId) {
        throw Error('Missing data');
      }
      const reviews = await getReviewsArtwork(artworkArtworkId)
      res.status(200).json(reviews);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = getReviewsArtworkHandler;