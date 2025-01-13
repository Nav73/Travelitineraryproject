const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { Card, YouMayLike, NearYou } = require("./models/cardmodels");
const Trip = require("./models/trip"); 
const Activity = require("./models/activity");
const Budget = require('./models/budget')
const Checklist = require('./models/checklist')
const Itinerary = require('./models/itinerary')
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

app.post("/api/budgets", async (req, res) => {
  try {
    const { tripName, accommodation, transportation, food, activities, miscellaneous, totalBudget } = req.body;

    const newBudget = new Budget({
      tripName,
      accommodation,
      transportation,
      food,
      activities,
      miscellaneous,
      totalBudget,
    });

    // Save the budget to the database
    await newBudget.save();

    res.status(201).json({ success: true, message: "Budget saved successfully!", budget: newBudget });
  } catch (error) {
    console.error("Error saving budget:", error);
    res.status(500).json({ success: false, message: "Error saving budget." });
  }
});


app.get("/api/budgets", async (req, res) => {
  try {
    const budgets = await Budget.find(); 
    res.status(200).json(budgets);
  } catch (error) {
    console.error("Error fetching budgets:", error);
    res.status(500).json({ success: false, message: "Error fetching budgets." });
  }
});


app.post("/api/checklist", async (req, res) => {
  try {
    const { item } = req.body;


    const newItem = new Checklist({
      item,
    });
    await newItem.save();

    res.status(201).json({ success: true, message: "Item added successfully", item: newItem });
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ success: false, message: "Error adding item" });
  }
});


app.get("/api/checklist", async (req, res) => {
  try {
    const items = await Checklist.find();
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ success: false, message: "Error fetching items" });
  }
});

app.delete("/api/checklist/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedItem = await Checklist.findByIdAndDelete(id);

    if (deletedItem) {
      res.status(200).json({ success: true, message: "Item removed successfully" });
    } else {
      res.status(404).json({ success: false, message: "Item not found" });
    }
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ success: false, message: "Error deleting item" });
  }
});


// Add a new itinerary day
app.post('/api/itinerary', async (req, res) => {
  try {
    const { title, details } = req.body;
    if (!title || !details) {
      return res.status(400).json({ message: 'Title and Details are required.' });
    }

    const newItineraryDay = new Itinerary({ title, details });
    await newItineraryDay.save();

    res.status(201).json({ success: true, itinerary: newItineraryDay });
  } catch (error) {
    console.error('Error saving itinerary day:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get all itinerary days
app.get('/api/itinerary', async (req, res) => {
  try {
    const itinerary = await Itinerary.find();
    res.status(200).json(itinerary);
  } catch (error) {
    console.error('Error fetching itinerary:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Delete an itinerary day
app.delete('/api/itinerary/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItinerary = await Itinerary.findByIdAndDelete(id);

    if (deletedItinerary) {
      res.status(200).json({ success: true, deletedId: id });
    } else {
      res.status(404).json({ success: false, message: 'Itinerary day not found' });
    }
  } catch (error) {
    console.error('Error deleting itinerary day:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


const port = process.env.PORT ;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
