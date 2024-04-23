const { DataTypes } = require("sequelize");
const db = require("../util/database");

const User = db.define("User", {
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});

module.exports = User;
