const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkSchema = new Schema({
  fullName: { type: String, required: true },
  addresses: { type: String, required: true },
  description: { type: String, required: true },
  standardHours: { type: String, required: true },
  entranceFees: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Park = mongoose.model("Park", parkSchema);

module.exports = Park;