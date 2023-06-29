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
      status: {
        type: DataTypes.ENUM('pending', 'approved', 'rejected'),
        defaultValue: 'pending',
        allowNull: false,
      },
    },
    { timestamps: true, paranoid: true }
  );
};
