const express = require("express");

const propertyRouter = express.Router();

const propertyController = require("../controllers/propertyController");

propertyRouter.get("/", propertyController.getAllProperties);
propertyRouter.get("/:id", propertyController.getPropertyById);
propertyRouter.post("/", propertyController.createPropertyForm);
propertyRouter.put("/:id", propertyController.updatePropertyForm);
propertyRouter.delete("/:id", propertyController.deletePropertyForm);

module.exports = propertyRouter;
