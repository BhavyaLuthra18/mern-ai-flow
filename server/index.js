import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import mongoose from "mongoose";
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
// // console.log("API KEY:", process.env.OPENROUTER_API_KEY);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// // ask ai
app.post("/api/ask-ai", async (req, res) => {
  const { prompt } = req.body;
  console.log("Prompt received:", prompt);

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }
  try {
    // return res.json({ answer: `AI Received: ${prompt}` });
    const aiResponse = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct:free",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        },
      }
    );
    const answer =
      aiResponse.data.choices[0]?.message?.content || "No response from AI";

    return res.json({ answer });
  } catch (error) {
    console.error("AI ERROR:", error.response?.data || error.message);
    return res.status(500).json({ error: "AI request failed" });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
