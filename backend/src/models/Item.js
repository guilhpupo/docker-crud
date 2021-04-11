const { DataTypes } = require("sequelize");
const database = require("../db");

const Item = database.define("Item", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

module.exports = Item;
