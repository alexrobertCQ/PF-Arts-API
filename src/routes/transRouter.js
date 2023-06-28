const { Router } = require('express');
const transRouter = Router();

const createTransHandler = require('../handlers/transactions/createTransactionHandler');
const authenticateToken = require('../utils/authenticateToken');

transRouter.post('/:artworkId', authenticateToken, createTransHandler);

// transRouter.get('/:userId', getFavsHandler);

// transRouter.delete('/delete/:userId/:artworkId', deleteFavsHandler);

module.exports = transRouter;
