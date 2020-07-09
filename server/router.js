const express = require("express");
const router = express.Router();

router.use("/login", require("./api/login/login.routes"));

router.use("/", (req, res) => {
  res.send("Node api is working properly");
});

module.exports = router;
