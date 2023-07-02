const { Router } = require('express');
const reviewsRouter = Router();

const postReviewsHandler = require('../handlers/reviews/postHandler');
const getReviewsArtworkHandler = require('../handlers/reviews/getHandlers');
const deleteReviewHandler = require('../handlers/reviews/deleteHandler');
const updateReviewHandler = require('../handlers/reviews/updateHandler');
const authenticateToken = require('../utils/authenticateToken');

reviewsRouter.post('/:artworkArtworkId', authenticateToken, postReviewsHandler);

reviewsRouter.get('/:artworkArtworkId', getReviewsArtworkHandler);

reviewsRouter.delete('/delete',authenticateToken, deleteReviewHandler);

reviewsRouter.put('/:artworkArtworkId',authenticateToken, updateReviewHandler);


module.exports = reviewsRouter;
