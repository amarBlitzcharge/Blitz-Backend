const express = require("express");
const app = express();
// config file
require("dotenv/config");
const morgan = require("morgan");
const mongoose = require("mongoose");

const api = process.env.API_URL;

// Middleware //
app.use(express.json());
app.use(morgan("tiny"));

app.get(`${api}/chargingstations`, (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(process.env.API_MONGODB_URL)
  .then(() => {
    console.log("Connected to BlitzDB");
  })
  .catch((err) => {
    console.log(err);
  });

// port number//
app.listen(3000, () => {
  console.log("listening on port 3000");
});
