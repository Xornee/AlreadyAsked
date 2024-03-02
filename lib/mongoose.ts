import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }
  if (isConnected) {
    console.log("using existing connection");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "DevOverflow",
    });
    isConnected = true;
    console.log("new connection");
  } catch (error) {
    console.log(error);
  }
};
