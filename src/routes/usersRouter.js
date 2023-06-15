const { Router } = require('express');
const usersRouter = Router();
const postUsersHandler = require ('../handlers/users/postHandler');
const getUsersHandler = require ('../handlers/users/getHandler.js');
/* const {
  postUsersHandler,
  getUsersHandler,
} = require('../handlers/usersHandler.js'); */

usersRouter.post('/', postUsersHandler);

usersRouter.get('/', getUsersHandler);

module.exports = usersRouter;
