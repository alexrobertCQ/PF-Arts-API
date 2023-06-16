const { Artwork } = require('../../db');
const { Op } = require('sequelize');

const artworksPaging = async (pag = 1, century, order, created) => {
  validate(pag, century, order, created);
  //La funcion recibe por query el numero de pagina que se desea ver,
  //el siglo que desea filtrar, si desea ver los dados en orden ascendente o descendente por precio
  //y si desea ver las obras de la api o las creadas por el usuario.
  //Todos los filtros son dinamicos y se pueden combinar entre si.

  const limit = 8;
  const offset = pag * limit - limit;
  const where = { offset: offset, limit: limit };
  if (century) {
    const years = [century * 100 - 100, century * 100 - 1];
    where.where = { date: { [Op.between]: years } };
  }
  if (order) {
    where.order = [['price', order]];
  }
  if (created) {
    if (where.where) where.where = { ...where.where, created: created };
    else where.where = { created: created };
  }
  const data = await Artwork.findAndCountAll(where);
  return data;
};

const validate = (pag, century, order, created) => {
  //Query data validation
  if (pag && isNaN(pag)) throw Error('Invalid paging range');
  if ((century && isNaN(century)) || century < 1 || century > 21)
    throw Error('Invalid century range');
  if (order && order != 'ASC' && order != 'DESC')
    throw Error('Invalid order input');
  if (created && created != 'true' && created != 'false')
    throw Error('invalid creation input');
};
module.exports = artworksPaging;
