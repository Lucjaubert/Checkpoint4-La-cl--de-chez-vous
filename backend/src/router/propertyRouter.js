const express = require("express");

const propertyRouter = express.Router();

const propertyController = require("../controllers/propertyController");

propertyRouter.get("/", propertyController.getAllProperties);
propertyRouter.get("/:id", propertyController.getPropertyById);
propertyRouter.get(
  "/selling_price_including_VAT",
  propertyController.getPropertyByPrice
);
propertyRouter.post("/:id", propertyController.createPropertyForm);
propertyRouter.put("/:id", propertyController.updatePropertyForm);
propertyRouter.delete("/:id", propertyController.deletePropertyForm);

module.exports = propertyRouter;
