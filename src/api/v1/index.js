import express from "express";
import { allUsers, loginUser } from "../../routes/users/users.js";

const router = express.Router();

router.use("/users", allUsers);
router.post("user/login", loginUser);

export default router;
