const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world from the API route! - Gabriela Hernandez");
});

router.get("/message", (req, res) => {
  res.json({ message: "This is a message - Gabriela Hernandez" });
});

module.exports = router;
