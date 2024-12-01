const mongoose = require("mongoose");

async function connection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/blockchain");
  console.log("connection created successfully...");
}

module.exports = connection;
