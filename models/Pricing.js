const { DataTypes } = require("sequelize");
const db = require("../config/dbCongif");

const Pricing = db.define("Pricing", {
  base_distance_in_km: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "base_distance_in_km",
  },
  km_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: "km_price",
  },
  fix_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: "fix_price",
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "item_id",
  },
  organization_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "organization_id",
  },
  zone: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "zone",
  },
});

module.exports = Pricing;
