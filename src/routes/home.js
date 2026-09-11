import express from "express";
import homeDefault from "../controller/homeController.js";

const router = express.Router();

router.get('/', homeDefault);

export default router;

