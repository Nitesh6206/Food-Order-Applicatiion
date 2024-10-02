// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors

dotenv.config(); // Load environment variables

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure CORS
const corsOptions = {
    origin: 'http://localhost:3000', // Frontend URL
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Import routes
const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);

// Basic Route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
