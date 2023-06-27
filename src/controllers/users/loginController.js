const { User } = require('../../db');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.JWT_SECRET;


const validateUser = async (userName, password) => {
  return new Promise((resolve, reject) => {
    console.log(userName, password);
    User.findOne({ where: { userName } })
      .then((user) => {
        if (user && user.password === password) {
          const token = jwt.sign({ userId: user.userId }, SECRET_KEY);
          resolve(token);
        } else {
          reject(new Error('Credenciales inválidas'));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = validateUser;
