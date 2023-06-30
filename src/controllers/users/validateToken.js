const { User } = require('../../db');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.JWT_SECRET;

const validateToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        console.log(decoded);
        const { userId } = decoded;
        User.findOne({ where: { userId } })
          .then((user) => {
            // Modificar el atributo 'verified' del usuario a true
            user.update({ verified: true })
              .then(() => {
                resolve(user);
              })
              .catch((error) => {
                reject(error);
              });
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  });
};

module.exports = validateToken;
