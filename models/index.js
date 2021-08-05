// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'Category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)

Product.belongsTo(ProductTag, {
  foreignKey: 'ProductTag_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(Product, {
  foreignKey: 'ProductTag_id',
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
