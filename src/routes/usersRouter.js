const { Router } = require('express');
const usersRouter = Router();
const {
  postUsersHandler,
  getUsersHandler,
} = require('../handlers/usersHandler.js');

usersRouter.post('/', postUsersHandler);

usersRouter.get('/', getUsersHandler);

module.exports = usersRouter;
