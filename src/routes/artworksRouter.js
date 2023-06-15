const { Router } = require('express');
const artworksRouter = Router();

const getArtworkHandler = require('../handlers/artworks/getHandler');
const getArtIdHandler = require('../handlers/artworks/getByIDHandler');
const postArtworkHandler = require('../handlers/artworks/postHandler');
const artworksPagingHandler = require('../handlers/artworks/pagingHandler');
const putArtworkHandler = require('../handlers/artworks/putArtworkHandler')

artworksRouter.get('/', getArtworkHandler);

artworksRouter.get('/detail/:id', getArtIdHandler);

artworksRouter.get('/db', artworksPagingHandler);

artworksRouter.post('/', postArtworkHandler);

artworksRouter.put('/:id', putArtworkHandler);

module.exports = artworksRouter;
