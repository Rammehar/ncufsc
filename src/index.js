import "dotenv/config";
import mongoose from "mongoose";
import { userRouter } from "./routes/userRoutes.js";
import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = 3002;

connectDB();

app.use(bodyParser.json());

app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server Running on Port Number ${PORT}`);
});

// mongoose.connection("open", () => {

// });

// mongoose.connection("on", (err) => {
//   console.log(`${err}`);
// });
