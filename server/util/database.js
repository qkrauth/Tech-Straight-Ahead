const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DATABASE_URL } = process.env;

// Initialize Sequelize and connect to the database
const db = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

// Test the database connection
db.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = db;
