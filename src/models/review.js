const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
      'review',
      {
        review: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },
    { timestamps: true }
  );
};