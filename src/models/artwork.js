const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "artwork",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      artistName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
