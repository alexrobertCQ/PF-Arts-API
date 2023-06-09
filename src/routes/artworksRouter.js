const { Router } = require("express");
const artworksRouter = Router();
const { getArtworkHandler } = require("../handlers/artworkHandler.js");

artworksRouter.get("/", getArtworkHandler);

module.exports = artworksRouter;
