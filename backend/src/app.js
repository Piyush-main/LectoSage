const express = require("express");

const app = express();

const healthRouter = require("./routes/health.routes");

app.use("/api", healthRouter);

module.exports = app;
