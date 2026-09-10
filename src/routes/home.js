const express = require("express");
const router = express.Router();

const homeDefault = require("../controller/homeController");

router.get('/', homeDefault);

module.exports = router;
