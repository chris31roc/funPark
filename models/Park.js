const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkSchema = new Schema({
  id: { type: String, required: true },
  fullName: { type: String, required: true },
  states: { type: String, required: true },
  images: {
    credit: { type: String, required: true },
    title: { type: String, required: true },
    altText: { type: String, required: true },
    caption: { type: String, required: true },
    url: { type: String, required: true }
  },
  addresses: { type: String, required: true },
  description: { type: String, required: true },
  standardHours: { type: String, required: true },
  entranceFees: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Park = mongoose.model("Park", parkSchema);

module.exports = Park;