const express = require("express");

const agentRouter = express.Router();

const agentController = require("../controllers/agentController");

agentRouter.post("/login", agentController.login);
agentRouter.get("/", agentController.getAllAgents);
agentRouter.get("/:id", agentController.getAgentById);
agentRouter.post("/createprofile", agentController.createAgent);
agentRouter.delete("/:id", agentController.deleteAgent);

module.exports = agentRouter;
