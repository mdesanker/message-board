const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: new Date(),
  },
  {
    text: "Hello, world!",
    user: "Michael",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Messageboard", messages: messages });
});

// Get form page
router.get("/new", (req, res, next) => {
  res.render("form", { title: "Add a message" });
});

router.post("/new", (req, res) => {
  messages.unshift({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
