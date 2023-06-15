const artworksPaging = require ('../../controllers/artworks/pagingController');

const artworksPagingHandler = async (req, res) => {
    const { pag } = req.query;
    console.log(pag);
    try {
      const artworks = await artworksPaging(pag);
      res.status(200).json(artworks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  module.exports = artworksPagingHandler;