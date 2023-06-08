const { Router } = require('express');
const usersRouter = Router();
const postUsersHandler = require('../handlers/postUsersHandler.js');

usersRouter.post('/', postUsersHandler);

module.exports = usersRouter;