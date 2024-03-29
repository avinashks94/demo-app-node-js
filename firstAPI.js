// Import necessary libraries
const express = require("express");
const app = express();
const port = 3000;

// Create the getGreeting function
function getGreeting(req, res) {
  const greeting = "Hello, world!";
  res.send(greeting);
}

// Define the "greetUser" endpoint
app.get("/greet", getGreeting);

// Start the server
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
