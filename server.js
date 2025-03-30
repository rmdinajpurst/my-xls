// Import dependencies
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

// Initialize Express
const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
    res.send("Backend is running...");
});

// Start the server
app.listen(PORT, () => {
    console.log(`?? Server running on http://localhost:${PORT}`);
});
