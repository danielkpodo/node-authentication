const express = require("express");
const router = express.Router();
const routeGuard = require("../config/routeGuard");

router.get("/", routeGuard, (req, res) => {
  res.render("dashboard", { name: req.user.username });
});

module.exports = router;
