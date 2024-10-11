const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');

// Import models for eager loading
const { User, Deck, Card } = require('./models'); // Ensure this path is correct
const views = require('./views');

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger('dev'));

// Welcome Route
app.get('/', (_req, res) => {
  res.send('Welcome to Mojo: The Summoning!');
});

// Eager Loading Route for Users with Decks and Cards
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{
        model: Deck,
        as: 'decks',  // Ensure this matches the alias defined in your model associations
        include: [{
          model: Card,
          as: 'cards'  // Ensure this matches the alias defined in your model associations
        }]
      }]
    });
    res.json(users);  // Return the users with their decks and cards
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Use existing routes
app.use('/user', views.user.router);
app.use('/card', views.card.router);

// Serve static files
app.use(express.static(path.join(__dirname, 'static')));

module.exports = app;
