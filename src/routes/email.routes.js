const express = require("express");
const EmailController = require("../controllers/email.controller");

const router = express.Router();

router.post("/send", EmailController.sendEmail);
router.get("/", EmailController.home);

module.exports = router;
