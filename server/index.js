import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const Port = 5000;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
