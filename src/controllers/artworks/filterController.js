const { Artwork,Category } = require('../../db');
const { Op } = require('sequelize');

const artworksPaging = async (pag=1, priceRange, order, category, orderType) => {
  validate(pag, priceRange, order, category, orderType);
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
  if (priceRange) {
    const price = [priceRange * 100 , priceRange * 100 + 99];//Rangos de precios de 0-99 etc...
    where.where = { price: { [Op.between]: price } };
  }
  if (order && orderType) {//Recibe si el orden es asc o des y por que tipo de atributo se ordena
    where.order = [[orderType, order]];
  }
  if (category) {
     where.include.where={name:category};
  }
  console.log(where);
  const data = await Artwork.findAndCountAll(where);
  return data;
};

const validate = (pag, priceRange, order, category, orderType) => {
  //Query data validation
  const categories=['Painting','Illustration','3D','Collage','Pixel Art','Photography']
  // if (pag && isNaN(pag)) throw Error('Invalid paging range');
  if ((priceRange && isNaN(priceRange)) || priceRange < 0)
    throw Error('Invalid price range');
  if (order && order != 'ASC' && order != 'DESC')
    throw Error('Invalid order input');
  if (orderType && orderType != 'title' && orderType != 'price')
    throw Error('Invalid order type');
  if (category && !categories.includes(category))
    throw Error('invalid creation input');
};
module.exports = artworksPaging;
