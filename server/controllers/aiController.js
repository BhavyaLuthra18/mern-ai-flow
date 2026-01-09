import axios from "axios";

export const askAI = async (req, res) => {
  const { prompt } = req.body;
  //   console.log("Prompt received:", prompt);

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }
  try {
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
};
