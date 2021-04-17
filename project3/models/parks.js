const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParkSchema = new Schema({
    parkCode: {
        type: String,
        trim: true,
        required: true,
        validate: [
            function(input) {
              return input.length >= 1;
            },
            "Title should be longer than 1"
          ]
    },
    location: {
      type: String,
      trim: true,
    },
    // start: Date,
    // end: Date,
    // description: String,
    // created: {
    //   type: Date,
    //   default: Date.now
    // },
    // lastUpdate:Date,
    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User"
    // },
    // guests: [{
    //   type: Schema.Types.ObjectId,
    //   ref: "User"
    // }],
    // allDay: {
    //   type: Boolean,
    //   default: true
    // } DELETE THIS CODE
});

// // Custom method `lastUpdatedDate`
// ParkSchema.methods.lastUpdatedDate = function() {
//   // Set the current user's `lastUpdated` property to the current date/time
//   this.lastUpdated = Date.now();
//   // Return this new date
//   return this.lastUpdated;  
//DELETE THIS CODE



const Park = mongoose.model("Park", parksSchema);

module.exports = Park;