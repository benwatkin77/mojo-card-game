// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { fetchUsers } = require('../views/user');  // Import the fetchUsers function

// Define the route for fetching users
router.get('/', fetchUsers);  // This will handle GET requests to /user

module.exports = router;  // Export the router