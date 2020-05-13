'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: '$2a$10$.SoGTao5/CP6k38u8rjgD.RM5k/.xA4n1ZcDVX4gsHhb4QEegSOge', // password
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }, {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: '$2a$10$.SoGTao5/CP6k38u8rjgD.RM5k/.xA4n1ZcDVX4gsHhb4QEegSOge', // password
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }, {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: '$2a$10$.SoGTao5/CP6k38u8rjgD.RM5k/.xA4n1ZcDVX4gsHhb4QEegSOge', // password
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
