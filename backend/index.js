const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./middleware/authRoutes");
const cardsRoutes = require("./api/cards");
const tripsRoutes = require("./api/trips");
const activitiesRoutes = require("./api/activities");
const budgetsRoutes = require("./api/budgets");
const checklistRoutes = require("./api/checklist");
const itineraryRoutes = require("./api/itinerary");

const app = express();
const EventEmitter = require('events');
const bus = new EventEmitter();
bus.setMaxListeners(20)
// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/cards", cardsRoutes);
app.use("/api/trips", tripsRoutes);
app.use("/api/activities", activitiesRoutes);
app.use("/api/budgets", budgetsRoutes);
app.use("/api/checklist", checklistRoutes);
app.use("/api/itinerary", itineraryRoutes);

// Server Setup
const port = process.env.PORT ;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
