const axios = require('axios');
const URL = 'https://www.wikiart.org/en/api/2/MostViewedPaintings';
const { Artwork } = require('../../db');

//GET
const getArtwork = async () => {
  const artworks = (await axios.get(URL)).data.data;
  // return artworksAPI;
  const arts = artworks.map((works) => {
    return {
      artworkId: works.id,
      title: works.title,
      authorName: works.artistName,
      image: works.image,
      date: works.completitionYear ? works.completitionYear : 0,
      height: works.height,
      width: works.width,
      price: works.width,
      created: false,
    };
  });
  return arts;
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

module.exports = {
  getAllArtwork,
  getArtwork,
};
