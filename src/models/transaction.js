const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'transaction',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      paypal_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      artwork: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      buyer: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      seller: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      artwork_value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      total_value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: true, paranoid: true }
  );
};
