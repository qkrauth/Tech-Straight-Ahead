const { DataTypes, Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL)

const User = sequelize.define("User", {
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
});

module.exports = User;
