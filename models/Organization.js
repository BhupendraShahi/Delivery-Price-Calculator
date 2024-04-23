const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");

const Organization = db.define("Organization", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Organization;

