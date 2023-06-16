const artworksPaging = require ('../../controllers/artworks/pagingController');

const artworksPagingHandler = async (req, res) => {
    const { pag,century,order,created } = req.query;
    try {
      const artworks = await artworksPaging(pag,century,order,created);
      res.status(200).json(artworks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  module.exports = artworksPagingHandler;