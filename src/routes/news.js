import express from "express";
import * as newController from "../controller/newsController.js";

const router = express.Router();

router.get("/", newController.newsDefault);
router.get("/:slug", newController.newsSlug);

export default router;