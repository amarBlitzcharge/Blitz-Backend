const ChargingStation = require("../Models/chargingStations");
const express = require("express");
const router = express.Router();

// Get all Stations //
router.get(`/`, async (req, res) => {
  const chargingStationsList = await ChargingStation.find();
  if (!chargingStationsList) {
    res
      .status(500)
      .json({ success: false, message: "Charging stations not found" });
  }
  res.send(chargingStationsList);
});

// Upload charging station //
router.post(`/`, async (req, res) => {
  const chargingStation = new ChargingStation({
    name: req.body.name,
    street: req.body.street,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    powertype: req.body.powertype,
    connectortype: req.body.connectortype,
    contact: req.body.contact,
  });
  chargingStation = await chargingStation.save();
  if (!chargingStation) {
    return res.status(500).send("Charging station not saved");
  }
  res.send(chargingStation);
});

module.exports = router;
