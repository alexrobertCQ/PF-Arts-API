const { Router } = require('express');
const router = Router();
const usersRouter = require ('./usersRouter.js')

// Setting up routers first it must be defined and import his file
 router.use('/users', usersRouter);


module.exports = router;
