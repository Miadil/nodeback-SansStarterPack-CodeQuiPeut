const express = require("express");
const router = express.Router();

const { login, logout } = require("../controller/authController");

router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
