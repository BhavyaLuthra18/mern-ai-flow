import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import airoutes from "./routes/aiFlowRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// API Routes
app.use("/api", airoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
