const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other", null],
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);
