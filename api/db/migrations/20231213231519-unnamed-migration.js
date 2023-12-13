'use strict';
const { PRODUCT_TABLE } = require('./../models/product.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'blocked');
    await queryInterface.removeColumn(PRODUCT_TABLE, 'price');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'blocked', {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
    await queryInterface.removeColumn(PRODUCT_TABLE, 'price', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    });
  },
};
