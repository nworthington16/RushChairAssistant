const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema

const RusheeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gtid: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Rushee = mongoose.model('rushee', RusheeSchema);
