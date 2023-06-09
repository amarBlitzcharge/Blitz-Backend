const express = require("express");
const app = express();
// config file
require("dotenv/config");
const morgan = require("morgan");
const mongoose = require("mongoose");
// host configuration//
const server = require("http").createServer(app);

const api = process.env.API_URL;
const chargingstationsRouter = require("./Routes/chargingstations");

// Middleware //
app.use(express.json());
app.use(morgan("tiny"));

// chargingstationsRouter//
app.use(`${api}chargingstations`, chargingstationsRouter);

mongoose
  .connect(process.env.API_MONGODB_URL)
  .then(() => {
    console.log("Connected to BlitzDB");
  })
  .catch((err) => {
    console.log(err);
  });

// port number local//
// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });

// Production//
server.listen(process.env.PORT || 3000, function () {
   var port = server.address().port;
   console.log("Backend listening" + port);
})