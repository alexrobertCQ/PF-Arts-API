const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'category',
    {
      name: {
        type: DataTypes.ENUM(
          'Painting',
          'Illustration',
          '3D',
          'Collage',
          'Pixel Art',
          'Photography'
        ),
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};
