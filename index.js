// index.js
require("dotenv").config();
const express = require("express");
const app = express();




// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, Node.js Project!");
});

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
