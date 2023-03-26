const express = require("express");
const app = express();
// config file
require("dotenv/config");
const morgan = require("morgan");
const mongoose = require("mongoose");

const api = process.env.API_URL;
const chargingstationsRouter = require("./Routes/chargingstations");

// Middleware //
app.use(express.json());
app.use(morgan("tiny"));
app.use(`${api}/chargingstations`, chargingstationsRouter);

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
