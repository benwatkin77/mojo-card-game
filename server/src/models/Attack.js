// src/models/Attack.js
const { DataTypes } = require('sequelize');
const { db } = require('../db/config');  // Import the Sequelize instance

// Define the Attack model
const Attack = db.define('Attack', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mojoCost: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  staminaCost: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Attack;  // Directly export the Attack model
