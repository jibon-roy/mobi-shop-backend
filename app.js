import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./src/config/db/db.js";
import router from "./src/api/v1/index.js"; // Adjust the path as necessary

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

// Define your routes
app.use("/api/v1", router); // Mount your API routes here

// Catch-all route for undefined routes
app.all("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
