require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_NAME, DB_PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

//Instantiating Sequelize Toggle for deploy or dev.
// const sequelize = new Sequelize(
//   DB_DEPLOY,
//   {
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   }
// );

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Reading all files from Models folder, they are required and added to the array  modelDefiners.
fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Inject Sequelize to all models
modelDefiners.forEach((model) => model(sequelize));
// Uppercase models name ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// Sequelize has all models in sequelize.models. we can use it destructuring.
const { User, Artwork } = sequelize.models;
// Then it can be related.
User.hasMany(Artwork, { foreignKey: 'userId' });
Artwork.belongsTo(User, { foreignKey: 'userId' });

User.belongsToMany(Artwork, {
  through: 'favorites',
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});
Artwork.belongsToMany(User, {
  through: 'favorites',
  foreignKey: 'artworkId',
  onDelete: 'CASCADE',
});

module.exports = {
  ...sequelize.models, // To import models like: const { Product, User } = require('./db.js');
  conn: sequelize, // To import connection { conn } = require('./db.js');
};
