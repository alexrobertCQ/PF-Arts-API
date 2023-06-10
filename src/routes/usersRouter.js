const { Router } = require("express");
const usersRouter = Router();
const { postUsersHandler } = require("../handlers/usersHandler");

usersRouter.post("/", postUsersHandler);

module.exports = usersRouter;
