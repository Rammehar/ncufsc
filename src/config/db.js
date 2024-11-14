import mongoose from "mongoose";
import { appConfig } from "./config.js";
const connectDB = async () => {
  try {
    console.log(appConfig.dbUrl);
    await mongoose.connect(appConfig.dbUrl);
    console.log("Connected to Database");
  } catch (err) {
    console.log(`Something went wrong with database: ${err}`);
  }
};

export { connectDB };
