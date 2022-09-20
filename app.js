const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const visitorsRouter = require("./routes/visitors");

app.use(cors());
app.use(express.json());
app.use("/api/visitors", visitorsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, next) => {
  const { status = 500, message } = err;
  res.status(status).json({ message });
});

module.exports = app;
