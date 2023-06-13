const axios = require('axios');
const URL = 'http://www.wikiart.org/en/api/2/MostViewedPaintings';
const { Artwork } = require('../db.js');

//GET
const getArtwork = async () => {
  const artworks = (await axios.get(URL)).data.data;
  // return artworksAPI;
  artworks.map((works) => {
    return {
      id: works.id,
      title: works.title,
      authorName: works.artistName,
      image: works.image,
      completitionYear: works.completitionYear,
    };
  });
  return artworks;
};

const getAllArtwork = async () => {
  const count = await Artwork.count();
  if (count > 0) {
    const artworksDB = await Artwork.findAll();
    return artworksDB;
  } else {
    const artworksAPI = await getArtwork();
    const DB = await Artwork.bulkCreate(artworksAPI);
    return DB;
  }
};

//POST
const createArtwork = async (title, artistName, image, completitionYear) => {
  const artworks = await Artwork.findAll();
  if (artworks.length === 0) {
    throw Error('No artworks available');
  }
  const duplicate = await artworks.some((works) =>
    works.title.toLowerCase().includes(title.toLowerCase())
  );
  if (duplicate) {
    throw new Error('Artwork already exists');
  } else {
    const artwork = await Artwork.create({
      title,
      artistName,
      image,
      completitionYear,
    });
    return artwork;
  }
};

module.exports = {
  getAllArtwork,
  createArtwork,
};
