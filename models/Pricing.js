const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");

const Pricing = db.define("Pricing", {
  base_distance_in_km: {
    type: DataTypes.FLOAT, // Assuming base distance can have decimal values
    allowNull: false,
    field: "base_distance_in_km",
    validate: {
      isFloat: true, // Validate that the value is a floating-point number
      min: 0 // Ensure that the value is non-negative
    }
  },
  km_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: "km_price",
    validate: {
      isFloat: true, // Validate that the value is a floating-point number
      min: 0 // Ensure that the value is non-negative
    }
  },
  fix_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: "fix_price",
    validate: {
      isFloat: true, // Validate that the value is a floating-point number
      min: 0 // Ensure that the value is non-negative
    }
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "item_id",
    references: {
      model: 'Item',
      key: 'id'
    }
  },
  organization_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "organization_id",
    references: {
      model: 'Organization',
      key: 'id'
    }
  },
  zone: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "zone",
    validate: {
      notEmpty: true // Ensure that the value is not an empty string
    }
  },
});

module.exports = Pricing;
