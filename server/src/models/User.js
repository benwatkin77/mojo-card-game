// src/models/User.js
const { DataTypes } = require('sequelize');
const { db } = require('../db/config');  // Import the Sequelize instance

// Define the User model
const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;  // Directly export the User model