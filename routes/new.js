const express = require("express");
const router = express.Router();

// Get form page
router.get("/", (req, res, next) => {
  res.render("form", { title: "Add a message" });
});

module.exports = router;
