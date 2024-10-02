// routes/menu.js
const express = require('express');
const auth = require('../middleware/auth'); // Authentication middleware
const router = express.Router();

// Protected Route to Get Menu Items
router.get('/menu', auth, (req, res) => {
    const menu = [
        { id: 1, name: 'Pizza', price: 12.99, type: 'Non-Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Burger', price: 8.99, type: 'Non-Veg', meal: 'Dinner', imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Pasta', price: 10.99, type: 'Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },
        // Add more items as needed
    ];

    res.json({ menu }); // Ensure you're sending a JSON response
});

module.exports = router;
