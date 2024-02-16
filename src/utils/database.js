import mongoose from "mongoose";
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_DB, {
      dbName: "blog",
    });
  } catch (error) {
    console.log("Api error", error);
  }
}

export default connectDB;
