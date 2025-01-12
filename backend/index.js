const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { Card, YouMayLike, NearYou } = require("./models/cardmodels");
const Trip = require("./models/trip"); // New model for trips
require("dotenv").config();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/api/cards", async (req, res) => {
  try {
    const popularDestinations = await Card.find({}).limit(10);
    const youMayLike = await YouMayLike.find({}).limit(10);
    const nearYou = await NearYou.find({}).limit(10);

    res.json({
      cardsData: popularDestinations,
      youMayLike: youMayLike,
      nearYou: nearYou,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});

app.get("/api/trips", async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trips", error });
  }
});

app.post("/api/trips", async (req, res) => {
  try {
    const newTrip = new Trip(req.body);
    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (error) {
    res.status(500).json({ message: "Error saving trip", error });
  }
});

// API to delete a trip
app.delete("/api/trips/:id", async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id);
    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }
    res.status(200).json({ message: "Trip deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting trip", error });
  }
});

const port = process.env.PORT ;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
