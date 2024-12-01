const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamps");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  street: {
    type: String,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  profilePicture: {
    type: String,
  },
  location: {
    latitude:String,
    longitude:String
  },
  userType: {
    type: String,
    default: "user",
    enum: ["user", "driver","admin"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// userSchema.plugin(timestamps, { index: true });
const User = mongoose.model("User", userSchema);

module.exports = User
