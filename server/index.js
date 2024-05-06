// Node.js is a lightweight back-end runtime environment for JavaScript
// Express is a Node.js framework designed to help built web applications. It provides features like PerformanceResourceTiming, middleware, and HTTP requests and responses
// Sequelize is part of Node.js ORM it supports RDBM systems like postgresSQL. it allows us developers to interact with databases

const express = require("express");
const cors = require("cors");
const Sequelize = require("sequelize");
const User = require("./models/User");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;


const authRoutes = require("./auth/authRoutes");


app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));


// db.sync({force: true})
//   .then(() => {
//     console.log('Database synchronized');
//     // Start the server after synchronization
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch(err => {
//     console.error('Database synchronization failed:', err);
//   });

// Option 1: Sync without dropping existing tables

// db.sync()
//   .then(() => {
//     console.log('Database synchronized');
//   })
//   .catch(err => {
//     console.error('Database synchronization failed:', err);
//   });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// db.sync()
//   .then(() => {
//     console.log('Database synchronized');
//     seedDatabase();
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch(err => {
//     console.error('Database synchronization failed:', err);
//   });

module.exports = app;
