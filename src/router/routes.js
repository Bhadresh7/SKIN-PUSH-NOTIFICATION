const express = require("express");
const { sendNotification } = require("../controller/controllers");
const router = express.Router();


router.post("/sendnotification",sendNotification);


module.exports = router;
