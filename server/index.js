// Node.js is a lightweight back-end runtime environment for JavaScript
// Express is a Node.js framework designed to help built web applications. It provides features like PerformanceResourceTiming, middleware, and HTTP requests and responses
// Sequelize is part of Node.js ORM it supports RDBM systems like postgresSQL. it allows us developers to interact with databases

const express = require("express");
const cors = require("cors");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
