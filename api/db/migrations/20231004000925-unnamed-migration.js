'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('unit_price', 'name', {
      type: Sequelize.DataTypes.ENUM(
        'unidad',
        '1kg',
        '100gr',
        '200gr',
        '300gr',
        '500gr',
        'docena',
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
    await queryInterface.changeColumn('unit_price', 'name', {
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
