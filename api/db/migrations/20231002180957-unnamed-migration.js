'use strict';
const { UNIT_PRICE_TABLE } = require('./../models/unit-price.model');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(UNIT_PRICE_TABLE, 'name', {
      type: Sequelize.DataTypes.ENUM(
        'Unidad',
        '1kg',
        '100gr',
        '200gr',
        '300gr',
        '500gr',
        'Docena',
        '2kg',
        '3kg',
        '4kg',
        '5kg',
        '10kg'
      ),
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(UNIT_PRICE_TABLE, 'name', {
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
    });
  },
};
