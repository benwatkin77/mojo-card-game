// src/models/Deck.js
const { DataTypes } = require('sequelize');
const { db } = require('../db/config');  // Import the Sequelize instance

// Define the Deck model
const Deck = db.define('Deck', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  xp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Deck;  // Directly export the Deck model
