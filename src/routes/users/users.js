import connectDB from "../../config/db/db";
import usersModel from "../../models/users";

const allUsers = async (req, res) => {
  await connectDB();
  const users = await usersModel.find();
  res.send(users);
};

export { allUsers };
