const { Router } = require('express');
const router = Router();
const usersRouter = require('./usersRouter.js');
const artworksRouter = require('./artworksRouter.js');
const favoritesRouter = require('./favoritesRouter.js');

// Setting up routers first it must be defined and import his file
router.use('/users', usersRouter);
router.use('/artworks', artworksRouter);
router.use('/favorites', favoritesRouter);

module.exports = router;
