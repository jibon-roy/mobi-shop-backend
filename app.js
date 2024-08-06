import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.get("/", (req, res) => {
  res.send("Server is running");
});

// Catch-all route for undefined routes
app.all("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
