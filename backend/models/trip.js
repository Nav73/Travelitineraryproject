const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  tripName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  destination: { type: String, required: true },
  travelers: { type: Number, required: true },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
