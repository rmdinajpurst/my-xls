// Import dependencies
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

// Initialize Express
const app = express();
const PORT = process.env.PORT || 10000; // Use Render's assigned port

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
    res.send("? Gr8 Kally is running this on a low...");
});

// Start the server
app.listen(PORT, () => {
    console.log(`?? Server running on port ${PORT}`);
});
