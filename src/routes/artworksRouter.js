const { Router } = require("express");
const artworksRouter = Router();
const { getArtworkHandler, postArtworkHandler, artworksPagingHandler } = require("../handlers/artworkHandler.js");

artworksRouter.get("/", getArtworkHandler);

artworksRouter.post("/", postArtworkHandler);

artworksRouter.get("/db",artworksPagingHandler);

module.exports = artworksRouter;
