const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const apiRouter = require("./routes/api");

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello world! - Gabriela Hernandez");
});

module.exports = app;
