const { Router } = require('express');
const usersRouter = Router();
const upload = require('../utils/cloudinaryUsersp.js');

const postUsersHandler = require('../handlers/users/postHandler');
const getUsersHandler = require('../handlers/users/getHandler.js');
const getUserIdHandler = require('../handlers/users/getByIDHandler');
const loginHandler = require('../handlers/users/loginHandler');
const updateUsersHandler = require('../handlers/users/updateHandler');
const getFavsHandler = require('../handlers/users/getFavoritesHandler.js');
const postFavoritesHandler = require('../handlers/users/postFavoritesHandler');
const deleteFavsHandler = require('../handlers/users/getFavoritesHandler');
const authenticateToken = require('../utils/authenticateToken'); // Importa el middleware

usersRouter.post('/', postUsersHandler);

usersRouter.get('/', getUsersHandler);

usersRouter.get('/detail/:id', getUserIdHandler);

usersRouter.put(
  '/edit',
  upload.single('profilePicture'),
  authenticateToken,
  updateUsersHandler
);

usersRouter.post('/login', loginHandler);

usersRouter.post('/:userId/:artworkId', postFavoritesHandler);

usersRouter.get('/favorites/:userId', getFavsHandler);

usersRouter.delete('/favorites/:userId', deleteFavsHandler);

module.exports = usersRouter;
