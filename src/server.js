const express = require("express");
const serverless = require("serverless-http");
const students = require("../students");
const app = express();

const router = express.Router();

router.get("/students", (req, res) => {
  res.json(students);
});

app.use("/.netlify/functions/server", router);

module.exports.handler = serverless(app);
