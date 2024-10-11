// src/db/config.js
const path = require('path');
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const db = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, './db.sqlite'),  // Adjust this path if necessary
});

module.exports = { db };