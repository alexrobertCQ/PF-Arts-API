const { Router } = require("express");
const usersRouter = Router();
const {
  postUsersHandler,
  getArtworkHandler,
} = require("../handlers/postUsersHandler.js");

usersRouter.post("/", postUsersHandler);

usersRouter.get("/", getArtworkHandler);

module.exports = usersRouter;
