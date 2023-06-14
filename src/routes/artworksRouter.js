const { Router } = require("express");
const artworksRouter = Router();
const getArtworkHandler = require ('../handlers/artworks/getHandler');
const postArtworkHandler = require ('../handlers/artworks/postHandler');
const artworksPagingHandler = require ('../handlers/artworks/pagingHandler');

//const { getArtworkHandler, postArtworkHandler, artworksPagingHandler } = require("../handlers/artworkHandler.js");

artworksRouter.get("/", getArtworkHandler);

artworksRouter.post("/", postArtworkHandler);

artworksRouter.get("/db",artworksPagingHandler);

module.exports = artworksRouter;
