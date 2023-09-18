const express = require("express");
const router = express.Router();

const movieRoutes = require("./movieRoutes");

router.get("/", (req, res) => {
  res.status(200).send("on et la ! /api");
});

router.use("/movie", movieRoutes);
// router.use("/user", userRoutes);

module.exports = router;
