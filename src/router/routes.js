const express = require("express");
const router = express.Router();
const { storeToken } = require("../controller/controllers.js");

router.post("/storeToken", storeToken);

module.exports = router;
