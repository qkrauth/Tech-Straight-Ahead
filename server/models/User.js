const { DataTypes } = require("sequelize");

const User = db.define("User", { // define users in the database we plan to create
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});

module.exports = User;
