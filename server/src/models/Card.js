// src/models/Card.js
const { DataTypes } = require('sequelize');
const { db } = require('../db/config');  // Import the Sequelize instance

// Define the Card model
const Card = db.define('Card', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mojo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stamina: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Card;  // Directly export the Card model
