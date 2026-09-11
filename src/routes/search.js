import express from "express";
import searchDefault from "../controller/searchController.js";

const router = express.Router();

router.get("/", searchDefault);
router.post("/", searchDefault);

export default router;
