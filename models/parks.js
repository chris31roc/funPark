const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const parksSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }
// });

const Park = mongoose.model("Park", parksSchema);

module.exports = Park;