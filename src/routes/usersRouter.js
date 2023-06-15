const { Router } = require('express');
const usersRouter = Router();
const postUsersHandler = require('../handlers/users/postHandler');
const getUsersHandler = require('../handlers/users/getHandler.js');
const getUserIdHandler = require('../handlers/users/getByIDHandler');

usersRouter.post('/', postUsersHandler);

usersRouter.get('/', getUsersHandler);

usersRouter.get('/detail/:id', getUserIdHandler);

module.exports = usersRouter;
