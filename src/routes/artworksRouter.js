const { Router } = require("express");
const artworksRouter = Router();
const { getArtworkHandler, postArtworkHandler } = require("../handlers/artworkHandler.js");

artworksRouter.get("/", getArtworkHandler);

artworksRouter.post("/", postArtworkHandler);

module.exports = artworksRouter;
