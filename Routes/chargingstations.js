const { ChargingStation } = require("../Models/chargingStations");
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
  // post charging station//
  const chargingStation = new ChargingStation({
    name: req.body.name,
    street: req.body.street,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    capacity: req.body.capacity,
    connectortype: req.body.connectortype,
    ports: req.body.ports,
    contact: req.body.contact,
  });
  chargingStation
    .save()
    .then((newChargingStations) => {
      res.status(201).json(chargingStation);
    })
    .catch((err) => {
      res.status(500).json({ success: false, message: err });
    });
});

module.exports = router;
