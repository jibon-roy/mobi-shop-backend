import mongoose from "mongoose";
import userSchema from "../schema/user";

const usersModel = mongoose.model("users", userSchema);

export default usersModel;
