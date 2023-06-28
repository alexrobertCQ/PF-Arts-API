const { Artwork,Category } = require('../../db');
const { Op } = require('sequelize');

const artworksPaging = async (pag=1, minPrice, maxPrice, order, category, orderType) => {
  validate(pag, minPrice, maxPrice, order, category, orderType);
  // const limit = 10;
  // const offset = pag * limit - limit;
  // const where = { offset: offset, limit: limit };
  const where = {
    include:{
      model: Category,
      attributes: ['name'],
      through:{
          attributes:[],
      },
    }};
  if (minPrice && maxPrice) {
    where.where = { price: { [Op.between]: [minPrice, maxPrice] } };
  }
  if (order && orderType) {
    where.order = [[orderType, order]];
  }
  if (category) {
     where.include.where={name:category};
  }
  const data = await Artwork.findAndCountAll(where);
  return data;
};

const validate = (pag, minPrice, maxPrice, order, category, orderType) => {
  //Query data validation
  console.log(parseInt(minPrice)>parseInt(maxPrice));
  const categories=['Painting','Illustration','3D','Collage','Pixel Art','Photography']
  if (pag && isNaN(pag)) throw Error('Invalid paging range');
  if ((minPrice && maxPrice && (isNaN(minPrice) || isNaN(maxPrice))) 
    || parseInt(minPrice) < 0 || parseInt(minPrice)>parseInt(maxPrice))
      throw Error('Invalid price range');
  if (order && order != 'ASC' && order != 'DESC')
    throw Error('Invalid order input');
  if (orderType && orderType != 'title' && orderType != 'price')
    throw Error('Invalid order type');
  if (category && !categories.includes(category))
    throw Error('invalid creation input');
};
module.exports = artworksPaging;
