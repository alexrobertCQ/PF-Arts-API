const artworksPaging = require('../../controllers/artworks/filterController');

const artworksPagingHandler = async (req, res) => {
  const { pag, priceRange, order, category, orderType } = req.query;
  try {
    const artworks = await artworksPaging(pag, priceRange, order, category, orderType);
    res.status(200).json(artworks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = artworksPagingHandler;
