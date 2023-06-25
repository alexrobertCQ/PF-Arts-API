const { User } = require('../../db');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'usa el dotenv';

const validateUser = async (userName, password) => {
  return new Promise((resolve, reject) => {
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
