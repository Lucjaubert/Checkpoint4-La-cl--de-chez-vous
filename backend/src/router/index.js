const express = require("express");

const router = express.Router();
const agentRouter = require("./agentRouter");
const propertyRouter = require("./propertyRouter");
// const roleRouter = require("./roleRouter");

router.use("/agent", agentRouter);
router.use("/properties", propertyRouter);

module.exports = router;
