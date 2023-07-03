const { Router } = require('express');
const router = Router();
const usersRouter = require('./usersRouter.js');
const artworksRouter = require('./artworksRouter.js');
const favoritesRouter = require('./favoritesRouter.js');
const transRouter = require('./transRouter.js');
const reviewsRouter = require('./reviewsRouter.js');

// Setting up routers first it must be defined and import his file
router.use('/users', usersRouter);
router.use('/artworks', artworksRouter);
router.use('/favorites', favoritesRouter);
router.use('/transactions', transRouter);
router.use('/reviews', reviewsRouter);

module.exports = router;
