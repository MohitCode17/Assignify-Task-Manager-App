import mongoose from "mongoose";
import { config } from "./env-config.js";

export const connectDB = async () => {
  try {
    // REGISTER EVENTS IF DB CONNECTED SUCCESS
    mongoose.connection.on("connected", () => {
      console.log(`Connected to Database successfully !!`);
    });
    // REGISTER EVENTS IF DB CONNECTED WITH ERROR
    mongoose.connection.on("error", (err) => {
      console.log(`Error connection with Database: ${err}`);
    });

    await mongoose.connect(config.mongodb_uri);
  } catch (error) {
    console.log(`Failed to connect with Database: ${error}`);
    process.exit(1);
  }
};
