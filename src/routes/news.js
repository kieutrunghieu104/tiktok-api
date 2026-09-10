const express = require("express");
const router = express.Router();

const newController = require("../controller/newsController");

router.get("/", newController.newsDefault);
router.get("/:slug", newController.newsSlug);

module.exports = router;