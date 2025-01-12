const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const url =
      "mongodb+srv://ahmadak9305:RHw3wN6y8j8S9mfe@fridgemate.rikrd.mongodb.net/?retryWrites=true&w=majority&appName=fridgeMate";

    await mongoose.connect(url);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
