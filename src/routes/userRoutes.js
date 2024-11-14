import express from "express";
import {
  createNewUser,
  editUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", createNewUser);

userRouter.get("/", getAllUsers);

userRouter.get("/:userId", getUserById);

userRouter.put("/:userId", editUser);

export { userRouter };
