const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
          model: "tag",
          key: "id"
      }
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
},
  product_id: {
  type: DataTypes.INTEGER,
  references: {
      model: "product",
      key: "id"
  }
},
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
