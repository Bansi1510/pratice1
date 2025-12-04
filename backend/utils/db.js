const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbconnect = mongoose.connect(process.env.MONGO_URL)

    if (dbconnect) {
      console.log("database connect ")
    }
  } catch (error) {
    console.log("Database not connected")
  }
}

module.exports = connectDB;