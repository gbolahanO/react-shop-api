'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Categories', [{
        name: 'clothings',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Shoes',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Accesories',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});

  }
};
