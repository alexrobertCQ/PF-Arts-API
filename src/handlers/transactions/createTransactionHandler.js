const { Artwork } = require('../../db');
const createTrans = require('../../controllers/transactions/createTransactionController');

const createTransHandler = async (req, res) => {
  const buyerId = req.userId;
  const artworkId = req.params.artworkId;

  if (!buyerId || !artworkId) {
    throw Error('Missing or invalid data');
  }
  try {
    const artwork = await Artwork.findById(artworkId);
    if (!artwork) {
      throw Error('Artwork not found');
    } else {
      const sellerId = artwork.userId;
      const response = await createTrans(artworkId, buyerId, sellerId);
      res.status(201).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    s;
  }
};

module.exports = createTransHandler;
