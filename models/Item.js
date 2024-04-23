const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");

const Item = db.define("Item", {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Item;