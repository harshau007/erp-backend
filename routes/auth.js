const express = require('express');
const router = express.Router();
const authController = require('../controller/auth');
const authenticateToken = require('../middleware/auth');
router.post('/', authController.login);
router.post("/validateUser", authenticateToken, authController.validateUser)
router.post("/sendOTP", authController.sendOTP)

router.post("/resetPassword", authController.resetPassword)
module.exports = router;

