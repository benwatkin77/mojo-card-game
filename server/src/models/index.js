// src/models/index.js
const User = require('./User');
const Deck = require('./Deck');
const Card = require('./Card');
const Attack = require('./Attack');

// Define associations
User.hasMany(Deck, { as: 'decks' });
Deck.belongsTo(User);

Deck.hasMany(Card, { as: 'cards' });
Card.belongsTo(Deck);

Card.belongsToMany(Attack, { through: 'CardAttack' });
Attack.belongsToMany(Card, { through: 'CardAttack' });

module.exports = {
  User,
  Deck,
  Card,
  Attack,
};