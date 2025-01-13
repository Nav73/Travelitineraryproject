const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { Card, YouMayLike, NearYou } = require("./models/cardmodels");
const Trip = require("./models/trip"); // New model for trips
const Activity = require("./models/activity");
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

app.get("/api/activities", async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching activities", error });
  }
});

app.post("/api/activities", async (req, res) => {
  const { date, activity } = req.body;

  if (!date || !activity) {
    return res.status(400).json({ message: "Date and activity are required" });
  }

  try {
    const newActivity = new Activity({ date, activity });
    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(500).json({ message: "Error creating activity", error });
  }
});

app.delete("/api/activities/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedActivity = await Activity.findByIdAndDelete(id);

    if (!deletedActivity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    res.status(200).json({ message: "Activity deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting activity", error });
  }
});
const port = process.env.PORT ;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
