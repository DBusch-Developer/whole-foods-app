const express = require("express");
// Grabbing the node module library

// Import node module express and storing it in a variable

const app = express();
// Calling the function running

// Instantiating an instance of express

const port = 3000;
// this is where I am running it in my browser

// This is the actual port on my machine where the server will listen for http requests

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// get request with a response of "Hello World!"

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// this is where i am running my server and console logging back verification that it is running/listening

// Nodemon restarts the server for you every time you make changes
