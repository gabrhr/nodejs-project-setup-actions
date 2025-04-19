const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const apiRouter = require("./routes/api");

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello world! - Gabriela Hernandez");
});

exports.api = functions.https.onRequest(app);

module.exports = app;
