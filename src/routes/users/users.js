import connectDB from "../../config/db/db.js";
import usersModel from "../../models/users.js";

const allUsers = async (req, res) => {
  await connectDB();
  const users = await usersModel.find();
  res.send(users);
};

export { allUsers };
