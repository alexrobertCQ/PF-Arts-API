const { Router } = require('express');
const favoritesRouter = Router();

const getFavsHandler = require('../handlers/favs/getFavoritesHandler.js');
const postFavsHandler = require('../handlers/favs/postFavoritesHandler.js');
const deleteFavsHandler = require('../handlers/favs/deleteFavoritesHandler.js');
const authenticateToken = require('../utils/authenticateToken');

favoritesRouter.post('/:userId/:artworkId', postFavsHandler);

favoritesRouter.get('/:userId', getFavsHandler);

favoritesRouter.delete('/delete/:userId/:artworkId', deleteFavsHandler);

module.exports = favoritesRouter;
