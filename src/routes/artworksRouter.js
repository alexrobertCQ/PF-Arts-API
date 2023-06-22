const { Router } = require('express');
const artworksRouter = Router();
const upload = require('../utils/cloudinary');

const getArtworkHandler = require('../handlers/artworks/getHandler');
const getArtIdHandler = require('../handlers/artworks/getByIDHandler');
const postArtworkHandler = require('../handlers/artworks/postHandler');
const artworksPagingHandler = require('../handlers/artworks/pagingHandler');
const putArtworkHandler = require('../handlers/artworks/putArtworkHandler');
const deleteArtworkHandler = require('../handlers/artworks/deleteHandler');

artworksRouter.get('/', getArtworkHandler);

artworksRouter.get('/detail/:id', getArtIdHandler);

artworksRouter.get('/db', artworksPagingHandler);

artworksRouter.post('/', upload.single('image'), postArtworkHandler);

artworksRouter.put('/:id', putArtworkHandler);

artworksRouter.delete('/:id', deleteArtworkHandler);

module.exports = artworksRouter;
