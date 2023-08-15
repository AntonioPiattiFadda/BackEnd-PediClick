'use strict';
const { PRODUCT_TABLE } = require('./../models/product.model');
const { UNIT_PRICE_TABLE } = require('./../models/unit-price.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(UNIT_PRICE_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: {
        type: Sequelize.DataTypes.ENUM(
          '1kg',
          '100gr',
          '500gr',
          'dozen',
          '2kg',
          '3kg',
          '4kg',
          '5kg',
          '10kg'
        ),
        allowNull: false,
      },

      value: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        field: 'product_id',
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: PRODUCT_TABLE,
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(UNIT_PRICE_TABLE);
  },
};
