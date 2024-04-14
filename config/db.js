const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Connected To Database successfully`);
  } catch (error) {
    console.log("DB Error", error);
  }
};
module.exports = connectDb;