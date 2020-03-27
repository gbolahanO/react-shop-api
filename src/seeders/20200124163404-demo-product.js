'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: 'Product 2',
      price: 300,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ut voluptates quasi iste quod? Dolores similique reprehenderit doloribus aut repellendus. Quos inventore id nisi dolor. Praesentium nobis quasi velit nesciunt.',
      image: 'https://lorempixel.com/540/360/?45267',
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Product 2',
      price: 300,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ut voluptates quasi iste quod? Dolores similique reprehenderit doloribus aut repellendus. Quos inventore id nisi dolor. Praesentium nobis quasi velit nesciunt.',
      image: 'https://lorempixel.com/540/360/?45267',
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Product 3',
      price: 300,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ut voluptates quasi iste quod? Dolores similique reprehenderit doloribus aut repellendus. Quos inventore id nisi dolor. Praesentium nobis quasi velit nesciunt.',
      image: 'https://lorempixel.com/540/360/?45267',
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Products', null, {});
    */
  }
};
