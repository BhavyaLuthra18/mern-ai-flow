import mongoose from "mongoose";

const responseHistorySchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  response: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("ResponseHistory", responseHistorySchema);
