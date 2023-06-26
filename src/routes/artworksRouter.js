const { Router } = require('express');
const artworksRouter = Router();
const upload = require('../utils/cloudinary');

const getArtworkHandler = require('../handlers/artworks/getHandler');
const getArtIdHandler = require('../handlers/artworks/getByIDHandler');
const postArtworkHandler = require('../handlers/artworks/postHandler');
const artworksFilterHandler = require('../handlers/artworks/filterHandler');
const putArtworkHandler = require('../handlers/artworks/putArtworkHandler');
const deleteArtworkHandler = require('../handlers/artworks/deleteHandler');
const authenticateToken = require('../utils/authenticateToken');

artworksRouter.get('/', getArtworkHandler);

artworksRouter.get('/detail/:id', getArtIdHandler);

artworksRouter.get('/db', artworksFilterHandler);

artworksRouter.post(
  '/',
  upload.single('image'),
  authenticateToken,
  postArtworkHandler
);

artworksRouter.put(
  '/edit/:artworkId',
  upload.single('image'),
  authenticateToken,
  putArtworkHandler
);

artworksRouter.delete(
  '/delete/:artworkId',
  authenticateToken,
  deleteArtworkHandler
);

module.exports = artworksRouter;
