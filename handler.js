const serverless = require("serverless-http");
const express = require("express");
const app = express();
const author = require("./models/author.model");
require("./connectMongo");

app.get("/", (req, res, next) => {
  console.log("Here is root");
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (req, res, next) => {
  console.log("Here is hello");
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.get("/check", async (req, res) => {
  const authors = await author.find({});
  console.log({ authors });
  return res.status(200).json(authors);
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

exports.handler = serverless(app);
