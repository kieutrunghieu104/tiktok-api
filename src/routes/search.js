const express = require("express");
const router = express.Router();

const searchDefault = require("../controller/searchController");

router.get("/", searchDefault);
router.post("/", searchDefault);

module.exports = router;