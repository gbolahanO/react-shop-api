'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: 'Product 1',
      price: 90,
      description: faker.random.words(20),
      image: 'https://lorempixel.com/540/360/?45267',
      categoryId: 1,
      userId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }, {
      name: 'Product 2',
      price: 120,
      description: faker.random.words(20),
      image: 'https://lorempixel.com/540/360/?45227',
      categoryId: 1,
      userId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }, {
      name: 'Product 3',
      price: 250,
      description: faker.random.words(20),
      image: 'https://lorempixel.com/540/360/?25267',
      categoryId: 1,
      userId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Products', null, {});

  }
};
