import ResponseHistory from "../models/ResponseHistory.js";

export const saveResponseHistory = async (req, res) => {
  const { prompt, response } = req.body;

  if (!prompt || !response) {
    return res.status(400).json({ error: "Prompt and response are required" });
  }

  try {
    await ResponseHistory.create({ prompt, response });
    return res
      .status(201)
      .json({ message: "Response saved to db successfully" });
  } catch (error) {
    console.error("DB Save Error:", error);
    return res.status(500).json({ error: "DB save failed" });
  }
};
