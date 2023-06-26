const { Router } = require('express');
const favoritesRouter = Router();

const getFavsHandler = require('../handlers/favs/getFavoritesHandler.js');
const postFavsHandler = require('../handlers/favs/postFavoritesHandler.js');
// const deleteFavsHandler = require('../handlers/favs/getFavoritesHandler.js');

favoritesRouter.post('/:userId/:artworkId', postFavsHandler);

favoritesRouter.get('/:userId', getFavsHandler);

// favoritesRouter.delete('/:userId', deleteFavsHandler);

module.exports = favoritesRouter;
