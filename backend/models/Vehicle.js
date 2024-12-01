const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamps = require("mongoose-timestamps");

const vehicleSchema = new Schema({
  userId: {
    type: String,
    ref: "User",
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  vehicleModel: {
    type: String,
    required: true,
  },
  vehicleYear: {
    type: String,
    required: true,
  },
  vehicleLicensePlate: {
    type: String,
    required: true,
  },
  driverName: {
    type: String,
    required: true,
    trim: true,
  },
  driverLicenseNumber: {
    type: String,
    required: true,
    trim: true,
  },
  driverLicenseExpiration: {
    type: String,
    required: true,
    trim: true,
  },
  driverAddress: {
    type: String,
    required: true,
  },
  driverPhoneNumber: {
    type: String,
    required: true,
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

//vehicleSchema.plugin(timestamps, { index: true });
const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports =Vehicle;
