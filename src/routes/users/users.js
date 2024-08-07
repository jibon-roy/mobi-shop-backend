import connectDB from "../../config/db/db.js";
import usersModel from "../../models/users.js";
import jwt from "jsonwebtoken";

const allUsers = async (req, res) => {
  await connectDB();
  const users = await usersModel.find();
  res.send(users);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await usersModel.findOne({ email });

    // Check if user exists and password matches
    if (!user || !user.comparePassword(password)) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const userToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      userToken,
      userInfo: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export { allUsers, loginUser };
