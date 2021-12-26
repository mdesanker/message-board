const express = require("express");
const router = express.Router();

const dateOptions = {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "2-digit",
};

const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: "Sunday, December 26, 2021, 1:25:28 PM",
  },
  {
    text: "Merry Christmas 2021!",
    user: "Michael",
    added: "Saturday, December 25, 2021, 9:05:15 AM",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Messageboard", messages: messages });
});

// Get form page
router.get("/new", (req, res, next) => {
  res.render("form", { title: "Messageboard" });
});

router.post("/new", (req, res) => {
  messages.unshift({
    text: req.body.message,
    user: req.body.name,
    added: new Date().toLocaleDateString("en-US", dateOptions),
  });
  res.redirect("/");
});

module.exports = router;
