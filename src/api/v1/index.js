import express from "express";
import { allUsers } from "../../routes/users/users.js";

const router = express.Router();

router.use("/users", allUsers);

export default router;
