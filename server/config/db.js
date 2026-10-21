import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.warn("WARNING: MONGO_URI is not set in environment variables.");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Atlas connected!");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
