const express = require("express");
const apiRouter = new express.Router();
const dogsRouter = require("./dogs");

apiRouter.use("/dogs", dogsRouter);

module.exports = apiRouter;
