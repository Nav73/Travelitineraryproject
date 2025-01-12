const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());

// Connect to MongoDB using the connection string in .env
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Define separate schemas for each collection
const cardSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

// Define models for each collection
const Card = mongoose.model("Card", cardSchema, "cardsData");
const YouMayLike = mongoose.model("YouMayLike", cardSchema, "youMayLike");
const NearYou = mongoose.model("NearYou", cardSchema, "nearYou");

// Define route to get all cards data
app.get("/api/cards", async (req, res) => {
  try {
    // Fetch data from each collection
    const popularDestinations = await Card.find({}).limit(10);
    const youMayLike = await YouMayLike.find({}).limit(10);
    const nearYou = await NearYou.find({}).limit(10);

    // Send response with separate data for each category
    res.json({
      cardsData: popularDestinations,
      youMayLike: youMayLike,
      nearYou: nearYou,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
