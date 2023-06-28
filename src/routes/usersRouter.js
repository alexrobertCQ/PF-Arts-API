const { Router } = require('express');
const usersRouter = Router();
const upload = require('../utils/cloudinaryUsersp.js');

const postUsersHandler = require('../handlers/users/postHandler');
const getUsersHandler = require('../handlers/users/getHandler.js');
const getUserIdHandler = require('../handlers/users/getByIDHandler');
const loginHandler = require('../handlers/users/loginHandler');
const updateUsersHandler = require('../handlers/users/updateHandler');
const deleteUsersHandler = require('../handlers/users/deleteHandler.js');
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

usersRouter.delete('/delete', authenticateToken, deleteUsersHandler);

usersRouter.post('/login', loginHandler);

module.exports = usersRouter;
