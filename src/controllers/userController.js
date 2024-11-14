import { UserModel } from "../models/userModel.js";

const createNewUser = async (req, res) => {
  console.log("user body is", req.body);

  const user = await UserModel.create(req.body);

  res.send({ success: true, data: user }).status(200);
};

const getAllUsers = async (req, res) => {
  const users = await UserModel.find({}, { is_deleled: 0 });
  console.log("users are", users);
  res.send({ users }).status(200);
};

const getUserById = async (req, res) => {
  const { userId } = req.params;
  const user = await UserModel.findById(userId);

  res.send({ user }).status(200);
};

const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  const user = await UserModel.findOne({ email });

  res.send({ user }).status(200);
};

const editUser = async (req, res) => {
  const { email, full_name, age, phone_number, password } = req.body;
  const { userId } = req.params;

  console.log("User id is", userId);
  console.log("Body is", req.body);
  const user = await UserModel.findOneAndUpdate({ _id: userId }, req.body);

  res.send({ user }).status(200);
};

export { createNewUser, getAllUsers, getUserById, getUserByEmail, editUser };
