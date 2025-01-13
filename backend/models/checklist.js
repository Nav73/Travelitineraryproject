const mongoose = require("mongoose");

const checklistSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Checklist = mongoose.model("Checklist", checklistSchema);

module.exports = Checklist;
