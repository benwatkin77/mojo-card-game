const { User, Deck, Card } = require('../models'); // Adjust the path if necessary

// Function to fetch users with their decks and cards
async function fetchUsers(req, res) {
  try {
    const users = await User.findAll({
      include: [{
        model: Deck,
        as: 'decks',  // Use the correct alias here
        include: [{
          model: Card,
          as: 'cards'  // Use the correct alias for cards if set
        }]
      }]
    });
    res.json(users);  // Send the fetched users back
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Export the function to be used in your routes
module.exports = {
  fetchUsers
};
