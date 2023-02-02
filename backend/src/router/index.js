const express = require("express");

const router = express.Router();
const agentRouter = require("./agentRouter");
const propertyRouter = require("./propertyRouter");
const buyerRouter = require("./buyerRouter");

router.use("/agent", agentRouter);
router.use("/properties", propertyRouter);
router.use("/buyer", buyerRouter);

module.exports = router;
