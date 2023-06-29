const { Router } = require('express');
const reviewsRouter = Router();

const postReviewsHandler = require('../handlers/reviews/postHandler');
const getReviewsArtworkHandler = require('../handlers/reviews/getHandlers');
const deleteReviewHandler = require('../handlers/reviews/deleteHandler');
const authenticateToken = require('../utils/authenticateToken');

reviewsRouter.post('/', authenticateToken, postReviewsHandler);
reviewsRouter.get('/:artworkArtworkId', getReviewsArtworkHandler);
reviewsRouter.delete('/delete',authenticateToken, deleteReviewHandler);

module.exports = reviewsRouter;