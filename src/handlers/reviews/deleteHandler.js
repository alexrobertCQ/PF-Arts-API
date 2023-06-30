const deleteReview = require('../../controllers/reviews/deleteControler')
const deleteReviewHandler = async (req, res) => {
    const userUserId = req.userId;
    const {artworkArtworkId} = req.body;
    console.log(userUserId);
    try {
      if (!artworkArtworkId) {
        throw Error('Missing data');
      }
      const deleteRev = await deleteReview(userUserId,artworkArtworkId)
      res.status(200).json(deleteRev);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = deleteReviewHandler;