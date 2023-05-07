import * as express from "express";
import { topArticles } from "../controllers";

const router = express.Router();
router.get("/top", topArticles);

export default router;