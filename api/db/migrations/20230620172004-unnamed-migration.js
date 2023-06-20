'use strict';
const { PRODUCT_TABLE } = require('./../models/product.model');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(PRODUCT_TABLE, 'blocked', {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'blocked');
  },
};
