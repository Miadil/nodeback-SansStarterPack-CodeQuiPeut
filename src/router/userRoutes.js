const express = require("express");
const router = express.Router();

const { getOne, createOne } = require("../controller/userController");

router.get("/:id", getOne);
router.post("/", createOne);

module.exports = router;
