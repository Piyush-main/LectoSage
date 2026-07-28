const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running !",
  });
});

module.exports = app;
