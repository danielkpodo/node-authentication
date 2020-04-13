const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", userController.login);
router.post("/login", userController.successfulLogin);

router.get("/register", userController.register);
router.post("/register", userController.successfulRegistration);

module.exports = router;
