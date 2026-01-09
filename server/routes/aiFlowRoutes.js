import { Router } from "express";
import { askAI } from "../controllers/aiController.js";
import { saveResponseHistory } from "../controllers/responseHistoryController.js";

const router = Router();

router.post("/ask-ai", askAI);
router.post("/save-response", saveResponseHistory);

export default router;
