const { User } = require('../../db');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.JWT_SECRET;

const validateUser = async (userName, password) => {
  return new Promise((resolve, reject) => {
    console.log(userName, password);
    User.findOne({ where: { userName } })
      .then((user) => {
        if (user) {
          if (user.password === password) {
            if (user.verified) {
              const token = jwt.sign({ userId: user.userId }, SECRET_KEY);
              resolve(token);
            } else {
              reject(new Error('User is not verified'));
            }
          } else {
            reject(new Error('Invalid credentials'));
          }
        } else {
          reject(new Error('Invalid credentials'));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = validateUser;
