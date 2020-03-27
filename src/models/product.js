'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {});
  Product.associate = function (models) {
    Product.belongsTo(models.Category, {
      foreignKey: 'categoryId'
    })
  };
  return Product;
};