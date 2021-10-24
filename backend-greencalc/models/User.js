const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
  },
  phone: {
    type: String,
    required: true,
    minLength: 9,
    maxLength: 11,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  points: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
