const axios=require("axios")
const URL="http://www.wikiart.org/en/api/2/MostViewedPaintings"

const getArtworksControler=async()=>{
   const artworks=(await axios.get(URL)).data.data
   return artworks;
}

module.exports={getArtworksControler}