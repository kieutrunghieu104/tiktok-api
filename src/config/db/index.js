import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/tiktok-api")
    console.log("Connected to MongoDB");

  } catch (error) {
    console.error(error);
  }
}

export { connect };