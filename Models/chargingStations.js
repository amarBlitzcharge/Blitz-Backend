const mongoose = require("mongoose");

const chargingstationsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  powertype: {
    type: String,
    required: true,
  },
  connectortype: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: false,
  },
});

exports.ChargingStation = mongoose.model("ChargingStation", chargingstationsSchema);