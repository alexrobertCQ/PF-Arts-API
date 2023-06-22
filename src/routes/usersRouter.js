const { Router } = require('express');
const usersRouter = Router();
const postUsersHandler = require('../handlers/users/postHandler');
const getUsersHandler = require('../handlers/users/getHandler.js');
const getUserIdHandler = require('../handlers/users/getByIDHandler');
const loginHandler = require('../handlers/users/loginHandler');
const updateUsersHandler = require('../handlers/users/updateHandler');
const authenticateToken = require('../utils/authenticateToken'); // Importa el middleware
const getFavoritesHandler = require('../handlers/users/getFavoritesHandler');

usersRouter.post('/', postUsersHandler);
usersRouter.get('/', getUsersHandler);
usersRouter.get('/detail/:id', getUserIdHandler);
usersRouter.put('/edit', authenticateToken, updateUsersHandler);
usersRouter.post('/login', loginHandler);

usersRouter.get('/favorites/:id', getFavoritesHandler);

module.exports = usersRouter;
